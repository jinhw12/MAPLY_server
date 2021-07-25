const { video } = require("../../models");

module.exports = async (req, res) => {
  const { video_id } = req.params;

  if (!video_id) {
    res.status(400).send("Invalid video ID")
  } else {
    await video.destroy({
      where: { id: video_id }
    });
    res.send("Deleted successfully");
  }
};
