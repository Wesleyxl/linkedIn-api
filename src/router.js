const express = require("express");

const router = express.Router();

// middleware
const multer = require("multer");
const auth = require("./app/middleware/auth");

const multerConfig = require("./config/multer");

// controllers
const AuthController = require("./app/controller/AuthController");
const FeedController = require("./app/controller/FeedsController");
const CommentController = require("./app/controller/CommentController");
const UserController = require("./app/controller/UserController");

// auth routes
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/me", auth, AuthController.me);

// users routers
router.get("/users", auth, UserController.index);

// feeds routes
router.get("/feeds", auth, FeedController.index);
router.post(
  "/feeds",
  auth,
  multer(multerConfig).single("file"),
  FeedController.store
);
router.post("/feeds/update", auth, FeedController.update);
router.post("/feeds/destroy", auth, FeedController.destroy);

// comments routes
router.get("/comments/:publication_id", auth, CommentController.index);
router.post("/comments", auth, CommentController.store);

module.exports = router;
