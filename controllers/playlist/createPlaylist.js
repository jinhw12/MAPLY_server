const models = require("../../models");

module.exports = async (req, res) => {
  const playlist = req.body;
  models.playlist.post(playlist, (error, result) => {
    if (!error) {
      res.json("created playlist");
    } else {
      res.status(404).send(error);
    }
  });
};
