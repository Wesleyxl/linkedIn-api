const { getUserToConnectServices } = require("../services/UserServices");

const index = async (req, res) => {
  try {
    const auth_id = res.locals.auth_data.id;

    const response = await getUserToConnectServices(auth_id);

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

const store = async (req, res) => {};

const update = async (req, res) => {};

const destroy = async (req, res) => {};

module.exports = {
  index,
  store,
  update,
  destroy,
};
