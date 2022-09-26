const Feed = require("../model/Feed");

const showAllFeedServices = async () => {
  try {
    const feeds = await Feed.findAll();

    if (feeds.length > 1) {
      return { error: "feeds not found" };
    }

    return { success: true, data: feeds };
  } catch (error) {
    return { error };
  }
};

const createFeedService = async (req, auth_id) => {
  try {
    const { text, publication_id, image } = req.body;

    const feed = await Feed.create({
      text,
      publication_id,
      image,
      user_id: auth_id,
    });

    if (!feed) {
      return { error: "something went wrong" };
    }

    return { success: true, data: feed };
  } catch (error) {
    return { error };
  }
};

const destroyFeedService = async (publication_id, auth_id) => {};

const updateFeedService = async (req, auth_id) => {};

module.exports = {
  createFeedService,
  showAllFeedServices,
  updateFeedService,
  destroyFeedService,
};
