const { showConnectionsServices } = require("../services/ConnectionServices");

const index = async (req, res) => {
  try {
    const auth_id = res.locals.auth_data.id;

    const response = await showConnectionsServices(auth_id);

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

module.exports = { index };
