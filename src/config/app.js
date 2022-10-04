module.exports = {
  name: "Api-LinkedIn",
  port: 8000,
  url: "http://localhost:8000",
  FeedFileUrl: "http://localhost:8000/storage/public/images/feeds",
  usersFileUrl: "http://localhost:8000/storage/public/images/users",

  // jwt config
  jwt: {
    secret: "abcdefghijklmnopqrstuvwxyz",
    expiresIn: "60M",
    algorithm: "HS256",
  },
};
