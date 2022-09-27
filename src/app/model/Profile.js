const { Model, DataTypes } = require("sequelize");

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        about: DataTypes.TEXT,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        career: DataTypes.STRING,
        experience: DataTypes.TEXT,
        education: DataTypes.TEXT,
        skills: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Profile",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "id",
      as: "user",
    });
  }
}

module.exports = Profile;
