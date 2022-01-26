const express = require("express");
const { body } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Password } = require("../../services/password");
const { BadRequestError } = require("./../../errors/bad-request-error");
const { validateRequest } = require("./../../middlewares/validate-request");
const { User } = require("./../../model/User");
const { buildTokens } = require("./../../services/tokens");
const { setTokens } = require("./../../services/tokens");

const Router = express.Router();

Router.post(
    "/signin",
    [
        body("email").isEmail().withMessage("Email must be valid"),
        body("password")
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage("Password must be between 4 and 20"),
    ],
    validateRequest,
    async (req, res) => {
        const { email, password } = req.body;

        let existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new BadRequestError("Invalid Credentials");
        }

        const user = {
            ...existingUser._doc,
        };

        const passwordMatch = await Password.compare(
            existingUser.password,
            password
        );

        if (!passwordMatch) {
            throw new BadRequestError("Invalid Credentials");
        }

        const token = buildTokens(user);

        setTokens(res, token);

        res.status(200).send({ message: "signed in" });
    }
);

module.exports = {
    SignInRouter: Router,
};
