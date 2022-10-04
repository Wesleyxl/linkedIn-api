const Feed = require("../model/Feed");
const User = require("../model/User");

const appConfig = require("../../config/app");

const showAllFeedServices = async () => {
  try {
    const feeds = await Feed.findAll({
      order: [["id", "DESC"]],
      attributes: ["id", "text", "likes", "image", "updatedAt"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "image"],
        },
      ],
    });

    if (feeds.length < 1) {
      return {
        error: "feeds not found",
      };
    }

    return {
      success: true,
      data: feeds,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const createFeedService = async (req, auth_id) => {
  try {
    const { text } = req.body;

    const fileName = await req.file.filename;

    const feed = await Feed.create({
      user_id: auth_id,
      text,
      image: `${appConfig.FeedFileUrl}/${fileName}`,
    });

    if (!feed) {
      return {
        error: "something went wrong",
      };
    }

    return {
      success: true,
      data: feed,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const destroyFeedService = async (id) => {
  try {
    const feed = await Feed.destroy({
      where: {
        id,
      },
    });

    if (!feed) {
      return {
        error: "Something went wrong",
      };
    }

    return {
      success: true,
      data: feed,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const updateFeedService = async (req, auth_id) => {};

module.exports = {
  createFeedService,
  showAllFeedServices,
  updateFeedService,
  destroyFeedService,
};
