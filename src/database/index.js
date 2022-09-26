const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig.development);

// models
const User = require("../app/model/User");
const Profile = require("../app/model/Profile");
const Feed = require("../app/model/Feed");
const Comment = require("../app/model/Comment");

// init models
User.init(connection);
Profile.init(connection);
Feed.init(connection);
Comment.init(connection);

// models associations
User.associate(connection.models);
Profile.associate(connection.models);
Feed.associate(connection.models);
Comment.associate(connection.models);

module.exports = connection;
