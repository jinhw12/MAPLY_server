const express = require("express");
const router = express.Router();

const { createVideo, deleteVideo, getVideo } = require("../controllers");

//GET /video/:playlist_id
router.get("/:playlist_id", getVideo);

//POST  /video
router.post("/", createVideo);

//DELETE /video/:content_id
router.delete("/:video_id", deleteVideo);

module.exports = router;
