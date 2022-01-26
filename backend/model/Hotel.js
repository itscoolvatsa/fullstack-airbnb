const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    city: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    latitude: {
        type: Number,
        require: true,
    },
    longitude: {
        type: Number,
        require: true,
    },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = {
    Hotel,
};
