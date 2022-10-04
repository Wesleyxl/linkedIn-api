const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        career: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Feed, {
      foreignKey: "user_id",
      as: "feeds",
    });
  }
}

module.exports = User;
