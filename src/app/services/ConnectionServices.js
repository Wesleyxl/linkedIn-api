const { Op } = require("sequelize");

const Connection = require("../model/Connection");

const showConnectionsServices = async (auth_id) => {
  try {
    const connections = await Connection.findAll({
      where: { user_id: { [Op.eq]: { auth_id } } },
    });

    if (connections.length < 1) {
      return {
        success: false,
        error: "connections not found",
      };
    }

    return {
      success: true,
      data: connections,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

module.exports = { showConnectionsServices };
