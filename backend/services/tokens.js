const jwt = require("jsonwebtoken");

// constants
const tokenSecret = process.env.TOKEN_SECRET;
const isProduction = process.env.NODE_ENV === "production";
const baseDomain = process.env.BASE_DOMAIN;

TokenExpiration = {
    // Access: 5 * 60,
    Refresh: 7 * 24 * 60 * 60,
};

const defaultCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    domain: baseDomain,
    path: "/",
};

const tokenCookieOptions = {
    ...defaultCookieOptions,
    maxAge: TokenExpiration.Refresh * 1000,
};

function signToken(payload) {
    return jwt.sign(payload, tokenSecret, {
        expiresIn: TokenExpiration.Refresh,
    });
}

const verifyToken = (token) => {
    return jwt.verify(token, tokenSecret);
};

const buildTokens = (user) => {
    const payload = { userId: user._id.toString(), userEmail: user.email };

    const token = signToken(payload);

    return token;
};

const setTokens = (res, token) => {
    res.cookie("token", token, tokenCookieOptions);
};

const clearTokens = (res) => {
    res.cookie("token", "", { ...defaultCookieOptions, maxAge: 0 });
};

module.exports = {
    buildTokens,
    setTokens,
    verifyToken,
    clearTokens,
};
