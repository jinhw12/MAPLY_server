"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.playlist.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      models.playlist.hasMany(models.video, {
        foreignKey: "playlist_id",
      });
    }
  }
  playlist.init(
    {
      playlist_name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "playlist",
    }
  );
  return playlist;
};
