const { Op } = require("sequelize");
const Comment = require("../model/Comment");
const User = require("../model/User");

const createCommentsService = async (req, auth_id) => {
  try {
    const { publication_id, text } = req.body;

    const newComment = await Comment.create({
      publication_id,
      user_id: auth_id,
      text,
    });

    if (!newComment) {
      return {
        error: "something went wrong",
      };
    }

    return {
      success: true,
      data: newComment,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const showComments = async (publication_id, auth_id) => {
  try {
    const comments = await Comment.findAll({
      where: { publication_id },
      order: [["id", "ASC"]],
      include: {
        model: User,
        as: "user",
        attributes: ["id", "name", "career", "image"],
      },
    });

    if (comments.length < 1) {
      return {
        error: "comments not found",
      };
    }

    return {
      success: true,
      data: comments,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

module.exports = {
  createCommentsService,
  showComments,
};
