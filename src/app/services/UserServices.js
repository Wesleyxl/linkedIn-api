const { Op } = require("sequelize");
const User = require("../model/User");

const getUserToConnectServices = async (auth_id) => {
  try {
    const users = await User.findAll({
      where: {
        id: {
          [Op.ne]: auth_id,
        },
      },
      attributes: ["id", "name", "career", "image"],
    });

    if (users.length < 1) {
      return {
        error: "users not found",
      };
    }

    return {
      success: true,
      data: users,
    };
  } catch (error) {
    return { error };
  }
};

module.exports = { getUserToConnectServices };
