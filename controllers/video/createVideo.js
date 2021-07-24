const models = require("../../models");

module.exports = async (req, res) => {
  // 플레이 리스트에 정보를 추가 / 삭제하는 기능..
  const content = req.body;
  models.video.post(video, (error, result) => {
    if (!error) {
      res.send(result);
    } else {
      res.status(404).send(error);
    }
  });
};
