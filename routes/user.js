const express = require("express");
const router = express.Router();
const { kakaoLogin, logout } = require("../controllers");

// POST user/kakao
router.get("/kakao", kakaoLogin);
// POST user/logout
router.post("/logout", logout);

module.exports = router;
