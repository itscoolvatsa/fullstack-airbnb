const express = require("express");
const { clearTokens } = require("../../services/tokens");

const Router = express.Router();

Router.post("/signout", (req, res) => {
    clearTokens(res);
    res.status(200).send({ message: "logged-out successfully" });
});

module.exports = {
    signoutRouter: Router,
};
