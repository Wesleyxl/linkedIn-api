const jwt = require("jsonwebtoken");

// app config
const app = require("../config/app");

const createUserToken = (userId) =>
  jwt.sign({ id: userId }, app.jwt.secret, {
    algorithm: app.jwt.algorithm,
    expiresIn: app.jwt.expiresIn,
  });

module.exports = createUserToken;
