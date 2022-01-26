const { scrypt } = require("crypto");
const { promisify } = require("util");

const scryptAsync = promisify(scrypt);
const salt = process.env.SALT;

class Password {
    static async hash(password) {
        const buffer = await scryptAsync(password, salt, 64);
        return buffer.toString("hex");
    }

    static async compare(storedPassword, suppliedPassword) {
        const buffer = await scryptAsync(suppliedPassword, salt, 64);
        return buffer.toString("hex") == storedPassword;
    }
}

module.exports = { Password };
