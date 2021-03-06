const { playlist, video } = require("../../models");

module.exports = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(401).send("Please sign in");
  }

  const myPlaylists = await playlist.findAll({ where: { user_id } });
  if (myPlaylists.length === 0) {
    return res.send([]);
  }

  let refinedData = myPlaylists.map(async (each) => {
    const { id, playlist_name } = each.dataValues;
    const firstVideo = await video.findOne({ where: { playlist_id: id } });
    const count = await video.count({ where: { playlist_id: id } });
    return { id, playlist_name, count, playlist_thumbnail: firstVideo !== null ? firstVideo.thumbnail : "empty" };
  });

  refinedData = await Promise.all(refinedData)
  res.send(refinedData);
};