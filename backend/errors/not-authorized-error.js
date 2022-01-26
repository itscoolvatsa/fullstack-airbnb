const { CustomError } = require("./custom-error");

class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super("Not Authorised");
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: "Not Authorised" }];
    }
}

module.exports = {
    NotAuthorizedError,
};
