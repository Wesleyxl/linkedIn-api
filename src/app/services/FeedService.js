const Feed = require("../model/Feed");
const User = require("../model/User");

const showAllFeedServices = async () => {
  try {
    const feeds = await Feed.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "career", "image"],
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
    const { text, image } = req.body;

    const feed = await Feed.create({
      text,
      image,
      user_id: auth_id,
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
