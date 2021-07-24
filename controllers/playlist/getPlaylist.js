const models = require("../../models");

module.exports = (req, res) => {
  models.playlist.get(req.params.user_id, (error, result) => {
    if (!error) {
      res.status(200).json(result);
    } else {
      res.status(404).send("No orders found.");
    }
  });
};
