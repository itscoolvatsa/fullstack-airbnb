const mongoose = require("mongoose");
const { Password } = require("../services/password");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

userSchema.pre("save", async function (done) {
    const user = this;
    if (user.isModified("password")) {
        const hashedPassword = await Password.hash(
            user.password,
            process.env.SALT,
            64
        );
        user.set("password", hashedPassword);
    }

    done();
});

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
};
