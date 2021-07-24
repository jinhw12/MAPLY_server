const express = require("express");
const router = express.Router();

const { createVideo, deleteVideo } = require("../controllers");

//POST  /content
router.post("/", createVideo);

//DELETE /content/:content_id
router.delete("/:video_id", deleteVideo);

module.exports = router;
