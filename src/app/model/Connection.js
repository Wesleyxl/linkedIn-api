const { Model, DataTypes } = require("sequelize");

class Connection extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        connection_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.User, {
      foreignKey: "connection_id",
      as: "connection",
    });
  }
}

module.exports = Connection;
