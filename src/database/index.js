const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig.production);

const User = require("../app/model/User");

User.init(connection);

module.exports = connection;
