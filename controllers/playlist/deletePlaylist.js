const models = require("../../models");

module.exports = (req, res) => {
  models.playlist.delete(req.params.playlist_id, (error, result) => {
    if (!error) {
      res.send(result);
    } else {
      res.status(404).send(error);
    }
  });
};
