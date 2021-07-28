"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.video.belongsTo(models.playlist, {
        foreignKey: "playlist_id",
        onDelete: "CASCADE",
      });
    }
  }
  video.init(
    {
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      video_id: DataTypes.STRING,
      playlist_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "video",
    }
  );
  return video;
};
