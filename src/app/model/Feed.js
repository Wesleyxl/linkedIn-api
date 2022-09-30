const { Model, DataTypes } = require("sequelize");

class Feed extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.TEXT,
        image: DataTypes.STRING,
        likes: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "id",
      as: "user",
    });
    this.hasMany(models.Comment, {
      foreignKey: "id",
      as: "comments",
    });
  }
}

module.exports = Feed;
