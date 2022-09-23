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
    this.belongsTo(models.user, { foreignKey: "id", as: "user" });
    this.belongsTo(models.feed, { foreignKey: "id", as: "feed" });
  }
}

module.exports = Comment;
