const {
  createFeedService,
  showAllFeedServices,
  updateFeedService,
  destroyFeedService,
} = require("../services/FeedService");

const index = async (req, res) => {
  try {
    const response = await showAllFeedServices();

    if (response.error) {
      return res.status(400).json({
        error: response.error,
      });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    const { publication_id, text } = req.body;
    // validating fields
    if (!publication_id || publication_id === "") {
      return res.status(400).json({
        error: "the publication_id field is required",
      });
    }

    if (!text || text === "") {
      return res.status(400).json({
        error: "the text field is required",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }

  // update feed service
  const auth_id = await res.locals.auth_data.id;
  const response = await updateFeedService(req, auth_id);

  if (response.error) {
    return res.status(400).json({
      error: response.error,
    });
  }

  return res.json(response.data);
};

const store = async (req, res) => {
  try {
    const { text } = req.body;

    // validating fields
    if (!text || text === "") {
      return res.status(400).json({
        error: "the text field is required",
      });
    }

    // create feed service
    const auth_id = await res.locals.auth_data.id;
    const response = await createFeedService(req, auth_id);

    if (response.error) {
      return res.status(400).json({
        error: response.error,
      });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { publication_id } = req.body;

    if (!publication_id || publication_id === "") {
      return res.status(400).json({
        error: "the publication_id field is required",
      });
    }

    const auth_id = await res.locals.auth_data.id;
    const response = await destroyFeedService(publication_id, auth_id);

    if (response.error) {
      return res.status(400).json({
        error: response.error,
      });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

module.exports = {
  index,
  store,
  update,
  destroy,
};
