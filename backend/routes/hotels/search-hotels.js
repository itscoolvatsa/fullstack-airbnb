const express = require("express");
const { Hotel } = require("../../model/Hotel");
const Router = express.Router();

Router.get("/gethotel", async (req, res) => {
    const hotel = await Hotel.find({});

    console.log(req.query);

    res.status(201).send(hotel);
});

module.exports = {
    getHotelRouter: Router,
};
