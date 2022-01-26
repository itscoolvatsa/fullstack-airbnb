const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("express-async-errors");
require("dotenv").config();

// Router Import (Auth)
const { SignUpRouter } = require("./routes/user/signup");
const { SignInRouter } = require("./routes/user/signin");
const { currentUserRouter } = require("./routes/user/current-user");
const { signoutRouter } = require("./routes/user/signout");

// Router Import (Hotel)
const { getAllHotelRouter } = require("./routes/hotels/get-all");
const { addHotelRouter } = require("./routes/hotels/add-hotel");

// Middlewares Import
const { errorHandler } = require("./middlewares/error-handler");

// Error Import
const {
    DatabaseConnectionError,
} = require("./errors/database-connection-error");
const { NotFoundError } = require("./errors/not-found-error");
const { getHotelRouter } = require("./routes/hotels/search-hotels");

// Middlewares
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());

// Constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

try {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected");
} catch (e) {
    throw new DatabaseConnectionError();
}

// Router Integretion
app.use("/auth", SignUpRouter);
app.use("/auth", SignInRouter);
app.use("/auth", currentUserRouter);
app.use("/auth", signoutRouter);
app.use("/hotel", addHotelRouter);
app.use("/hotel", getAllHotelRouter);
app.use("/hotel", getHotelRouter);
app.use("*", () => {
    throw new NotFoundError();
});
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
