const express = require("express");

const router = express.Router();

// middleware
const auth = require("./app/middleware/auth");

// controllers
const AuthController = require("./app/controller/AuthController");
const FeedController = require("./app/controller/FeedsController");
const CommentController = require("./app/controller/CommentsController");

router.get("/test", (req, res) => res.json({ status: "running" }));

// auth routes
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/me", auth, AuthController.me);

// feeds routes
router.get("/feeds", auth, FeedController.index);
router.post("/feeds", auth, FeedController.store);
router.post("/feeds/update", auth, FeedController.update);
router.post("/feeds/destroy", auth, FeedController.destroy);

module.exports = router;
