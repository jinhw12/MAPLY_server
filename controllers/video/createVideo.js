const { playlist, video } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { playlist_id, title, thumbnail, video_id } = req.body;

  if (!playlist_id || !title || !thumbnail || !video_id) {
    return res.status(400).send("Need more information");
  }

  const isValid = await playlist.findOne({ where: { id: Number(playlist_id) } });
  if (!isValid) {
    return res.status(400).send("Invalid playlist")
  }

  const foundVideo = await video.findOne(({
    where: {
      [Op.and]: [
        { video_id },
        { playlist_id: Number(playlist_id) }
      ]
    }
  }));

  if (foundVideo) {
    return res.status(403).send("Video already exists in the playlist");
  }

  const newVideo = await video.create({ title, thumbnail, video_id, playlist_id });
  const newVideoId = newVideo.id;

  res.send(`video added! video : { id : ${newVideoId}, title : ${title}, 
  thumbnail : ${thumbnail}, video_id : ${video_id}, playlist_id : ${playlist_id} }`)
};