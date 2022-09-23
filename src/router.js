const express = require("express");

const router = express.Router();

// middleware
const auth = require("./app/middleware/auth");

// controllers
const AuthController = require("./app/controller/AuthController");

router.get("/test", (req, res) => res.json({ status: "running" }));

// auth routes
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/me", auth, AuthController.me);

module.exports = router;
