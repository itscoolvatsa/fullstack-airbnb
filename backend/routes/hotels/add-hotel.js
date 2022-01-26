const express = require("express");
const { Hotel } = require("../../model/Hotel");
const Router = express.Router();

Router.post("/add", async (req, res) => {
    const { name, user_id, city, description, price, latitude, longitude } =
        req.body;

    const hotel = await new Hotel({
        name,
        user_id,
        city,
        description,
        price,
        latitude,
        longitude,
    });

    await hotel.save();

    res.status(201).send(hotel);
});

module.exports = {
    addHotelRouter: Router,
};
