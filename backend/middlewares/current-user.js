const { verifyToken } = require("../services/tokens");

const currentUser = (req, res, next) => {
    if (!req.cookies.token) {
        return next();
    }

    try {
        const payload = verifyToken(req.cookies.token);
        req.currentUser = payload;
    } catch (err) {}
    next();
};

module.exports = {
    currentUser,
};
