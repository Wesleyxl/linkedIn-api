const { Model, DataTypes } = require("sequelize");

class Feed extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.TEXT,
        image: DataTypes.STRING,
        likes: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.user, { foreignKey: "id", as: "user" });
    this.hasMany(models.comment, { foreignKey: "id", as: "comments" });
  }
}

module.exports = Feed;
