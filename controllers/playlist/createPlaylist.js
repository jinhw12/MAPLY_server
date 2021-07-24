const { video, playlist, user } = require("../../models");

module.exports = async (req, res) => {
  const { email, playlist_name, title, thumbnail, video_id } = req.body;
  const user_id = await user.findOne({ where: email }).catch(err => console.log(err));

  if (!user_id) {
    res.send(401).send("Please Log In");
  }
  else if (!title || !playlist_name || !thumbnail || !video_id) {
    res.send(400).send("Need More Information");
  }

  const newPlaylist = await playlist.create({ playlist_name, user_id });
  const newVideo = await video.create({ title, thumbnail, video_id });
  console.log(newPlaylist);
  console.log(newVideo);

  res.json("ok");
};
