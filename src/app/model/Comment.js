const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.TEXT,
        likes: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "id", as: "user" });
    this.belongsTo(models.Feed, { foreignKey: "id", as: "feed" });
  }
}

module.exports = Comment;
