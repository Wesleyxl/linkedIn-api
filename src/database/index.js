const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig.development);

// models
const User = require("../app/model/User");
const Profile = require("../app/model/Profile");

// init models
User.init(connection);
Profile.init(connection);

// models associations
User.associate(connection.models);
Profile.associate(connection.models);

module.exports = connection;
