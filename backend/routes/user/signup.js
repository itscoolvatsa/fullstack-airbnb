const express = require("express");
const { body } = require("express-validator");
const jwt = require("jsonwebtoken");
const { buildTokens, setTokens } = require("../../services/tokens");
const { BadRequestError } = require("./../../errors/bad-request-error");
const { validateRequest } = require("./../../middlewares/validate-request");
const { User } = require("./../../model/User");

const Router = express.Router();

Router.post(
    "/signup",
    [
        body("email").isEmail().withMessage("Email must be valid"),
        body("name")
            .isLength({ min: 3, max: 128 })
            .withMessage("Name is too short"),
        body("password")
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage("Password must be between 4 and 20"),
    ],
    validateRequest,

    async (req, res) => {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new BadRequestError("user already exists");
        }

        const user = await new User({ name, email, password });

        await user.save();

        const token = buildTokens(user);

        setTokens(res, token);

        res.status(201).send({ message: "user created" });
    }
);

module.exports = {
    SignUpRouter: Router,
};
