const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        publication_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        text: DataTypes.TEXT,
        likes: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Feed, { foreignKey: "publication_id", as: "feed" });
  }
}

module.exports = Comment;
