const express = require("express");
const router = express.Router();

const {
  getPlaylist,
  createPlaylist,
  deletePlaylist,
} = require("../controllers");

// GET /playlist 플레이 리스트 가져오기
router.get("/:user_id", getPlaylist);

// POST /playlist 플레이 리스트에 추가
router.post("/", createPlaylist);

// DELETE /playlist 플레이 리스트를 삭제
router.delete("/:playlist_id", deletePlaylist);

module.exports = router;
