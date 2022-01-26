const { CustomError } = require("./custom-error");

class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Route Not Found");

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: "Not Found" }];
    }
}

module.exports = {
    NotFoundError,
};
