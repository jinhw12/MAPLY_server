const { playlist } = require("../../models");

module.exports = async (req, res) => {
  const { playlist_id } = req.params;

  if (!playlist_id) {
    res.status(400).send("Invalid playlist ID")
  } else {
    await playlist.destroy({
      where: { id: playlist_id }
    });
    res.send("Deleted successfully");
  }
};