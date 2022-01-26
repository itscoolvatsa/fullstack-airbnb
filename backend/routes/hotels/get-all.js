const express = require("express");
const { Hotel } = require("../../model/Hotel");
const Router = express.Router();

Router.get("/getall", async (req, res) => {
    const hotel = await Hotel.find({});

    res.status(201).send(hotel);
});

module.exports = {
    getAllHotelRouter: Router,
};
