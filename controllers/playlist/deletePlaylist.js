const { playlist } = require("../../models");

module.exports = async (req, res) => {
  const { playlist_id } = req.params;

  if (!playlist_id) {
    return res.status(403).send("Invalid playlist ID")
  } else {
    const deletedPlaylist = await playlist.destroy({
      where: { id: playlist_id }
    })

    res.send(`Deleted successfully. Deleted playlist : { id : ${deletedPlaylist} }`)
  }
};