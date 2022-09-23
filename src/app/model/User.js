const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Profile, { foreignKey: "id", as: "profile" });
  }
}

module.exports = User;
