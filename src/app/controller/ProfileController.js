const {
  showProfileService,
  createProfileService,
  editProfileService,
} = require("../services/ProfileService");

const index = async (req, res) => {};

const show = async (req, res) => {
  try {
    const auth_id = res.locals.auth_data.id;

    const response = await showProfileService(auth_id);

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
    const { about, country, state, career, experience, education, skill } =
      req.body;

    if (!about || about === "") {
      return res.status(400).json({
        error: "about field is required",
      });
    }

    if (!country || country === "") {
      return res.status(400).json({
        error: "about field is required",
      });
    }

    if (!state || state === "") {
      return res.status(400).json({
        error: "state field is required",
      });
    }

    if (!career || career === "") {
      return res.status(400).json({
        error: "career field is required",
      });
    }

    if (!experience || experience === "") {
      return res.status(400).json({
        error: "experience field is required",
      });
    }

    if (!education || education === "") {
      return res.status(400).json({
        error: "education field is required",
      });
    }

    if (!skill || skill === "") {
      return res.status(400).json({
        error: "skill field is required",
      });
    }

    const auth_id = res.locals.auth_data.id;

    const response = await createProfileService(req, auth_id);

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
    const { about, country, state, career, experience, education, skill } =
      req.body;

    if (!about || about === "") {
      return res.status(400).json({
        error: "about field is required",
      });
    }

    if (!country || country === "") {
      return res.status(400).json({
        error: "about field is required",
      });
    }

    if (!state || state === "") {
      return res.status(400).json({
        error: "state field is required",
      });
    }

    if (!career || career === "") {
      return res.status(400).json({
        error: "career field is required",
      });
    }

    if (!experience || experience === "") {
      return res.status(400).json({
        error: "experience field is required",
      });
    }

    if (!education || education === "") {
      return res.status(400).json({
        error: "education field is required",
      });
    }

    if (!skill || skill === "") {
      return res.status(400).json({
        error: "skill field is required",
      });
    }

    const auth_id = res.locals.auth_data.id;

    const response = await editProfileService(req, auth_id);

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

const destroy = async (req, res) => {};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
