const { video, playlist } = require("../../models");

module.exports = async (req, res) => {
  const { video_id } = req.params;

  if (!video_id) {
    res.status(400).send("Invalid video ID")
  } else {
    const { dataValues } = await video.findOne({ where: { id: video_id } });
    const playlist_id = dataValues.playlist_id;
    const count = await playlist.count({ where: { id: playlist_id } });

    if (count >= 1) {
      await playlist.destory({ where: { id: playlist_id } })
    } else {
      await video.destroy({ where: { id: video_id } });
    }
    res.send("Deleted successfully");
  }
};