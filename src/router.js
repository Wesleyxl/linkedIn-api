const express = require("express");

const router = express.Router();

// middleware
const auth = require("./app/middleware/auth");

// controllers
const AuthController = require("./app/controller/AuthController");
const FeedController = require("./app/controller/FeedsController");
const ProfileController = require("./app/controller/ProfileController");
const CommentController = require("./app/controller/CommentController");

// auth routes
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/me", auth, AuthController.me);

// feeds routes
router.get("/feeds", auth, FeedController.index);
router.post("/feeds", auth, FeedController.store);
router.post("/feeds/update", auth, FeedController.update);
router.post("/feeds/destroy", auth, FeedController.destroy);

// profile routes
router.get("/profile/me", auth, ProfileController.show);
router.post("/profile", auth, ProfileController.store);
router.post("/profile/update", auth, ProfileController.update);

// comments routes
router.get("/comments/:publication_id", auth, CommentController.index);
router.post("/comments", auth, CommentController.store);

module.exports = router;
