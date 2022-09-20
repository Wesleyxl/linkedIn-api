const express = require("express");
const cors = require("cors");
const path = require("path");

// requires
const router = require("./router");
require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

// static folder
app.use("/storage", express.static(path.join(__dirname, "storage")));

app.listen(8000);
