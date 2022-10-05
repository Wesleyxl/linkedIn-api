const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig.development);

// models
const User = require("../app/model/User");
const Feed = require("../app/model/Feed");
const Comment = require("../app/model/Comment");
const Connection = require("../app/model/Connection");

// init models
User.init(connection);
Feed.init(connection);
Comment.init(connection);
Connection.init(connection);

// models associations
User.associate(connection.models);
Feed.associate(connection.models);
Comment.associate(connection.models);
Connection.associate(connection.models);

module.exports = connection;
