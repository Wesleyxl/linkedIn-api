module.exports = {
  name: "Api-LinkedIn",
  port: 8000,

  // jwt config
  jwt: {
    secret: "abcdefghijklmnopqrstuvwxyz",
    expiresIn: "60M",
    algorithm: "HS256",
  },
};
