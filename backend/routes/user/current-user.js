const express = require("express");
const { currentUser } = require("../../middlewares/current-user");

const Router = express.Router();

Router.get("/currentuser", currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

module.exports = {
    currentUserRouter: Router,
};
