const jwt = require("jsonwebtoken");

const createUserToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET || "secret", {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRE_IN || "60M",
  });

module.exports = createUserToken;
