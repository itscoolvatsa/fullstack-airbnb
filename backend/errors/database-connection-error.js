const { CustomError } = require("./custom-error");

class DatabaseConnectionError extends CustomError {
    statusCode = 400;
    reason = "Error connection to database";

    constructor() {
        super("Error connecting to db");
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}

module.exports = {
    DatabaseConnectionError,
};
