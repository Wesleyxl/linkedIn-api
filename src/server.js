const express = require("express");
const cors = require("cors");
const path = require("path");

// requires
const app = require("./config/app");
const router = require("./router");
require("./database");

const server = express();
server.use(cors());
server.use(express.json());
server.use("/api", router);

// static folder
server.use("/storage", express.static(path.join(__dirname, "storage")));

server.listen(app.port, () => {
  console.log(`Server ${app.name} is running on port ${app.port}`);
});
