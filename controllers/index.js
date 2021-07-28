module.exports = {
  kakaoLogin: require("./user/kakao"),
  logout: require("./user/logout"),
  getPlaylist: require("./playlist/getPlaylist"),
  createPlaylist: require("./playlist/createPlaylist"),
  deletePlaylist: require("./playlist/deletePlaylist"),
  createVideo: require("./video/createVideo"),
  deleteVideo: require("./video/deleteVideo"),
  getVideo: require("./video/getVideo"),
};
