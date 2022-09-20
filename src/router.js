const express = require("express");

const router = express.Router();

// controllers
const AuthController = require("./app/controller/AuthController");

router.get("/test", (req, res) => res.json({ status: "running" }));
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router;
