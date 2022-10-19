const {
  createCommentsService,
  showComments,
} = require("../services/CommentsService");

const index = async (req, res) => {
  try {
    const { publication_id } = req.params;

    const auth_id = res.locals.auth_data.id;

    const response = await showComments(publication_id, auth_id);

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

const store = async (req, res) => {
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

    const auth_id = res.locals.auth_data.id;

    const response = await createCommentsService(req, auth_id);

    if (response.error) {
      return res.status(400).json({
        error: response,
      });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({
      error: "something went wrong",
    });
  }
};

const update = async (req, res) => {
  try {
    return res.json({
      success: true,
      data: "ok"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error
    });
  }
};

const destroy = async (req, res) => {};

module.exports = {
  index,
  store,
  update,
  destroy,
};
