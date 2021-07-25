const { video, playlist, user } = require("../../models");

module.exports = async (req, res) => {
  const { email, playlist_name, title, thumbnail, video_id } = req.body;
  const foundUser = await user.findOne({ where: { email } });
  const user_id = foundUser.id;

  if (!user_id) {
    res.status(401).send("Please sign in");
  }
  else if (!title || !playlist_name || !thumbnail || !video_id) {
    res.status(400).send("Need more information");
  }

  const newPlaylist = await playlist.create({ playlist_name, user_id });
  const playlist_id = newPlaylist.id;
  const newVideo = await video.create({ title, thumbnail, video_id, playlist_id });

  res.send(`playlist created! playlist : { id : ${playlist_id} , name : "${playlist_name}" }. 
  video added : { id : ${newVideo.id}, title : "${title}", video_id : "${video_id}", thumbnail : "${thumbnail}" }`)
};
