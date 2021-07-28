const axios = require("axios");
const { user } = require("../../models");

module.exports = async (req, response) => {
  const code = req.query.code;
  await axios
    .post(
      "https://kauth.kakao.com/oauth/token",
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept: "*/*",
        },
      },
      {
        params: {
          grant_type: "authorization_code",
          client_id: process.env.KAKAO_REST_API,
          redirect_uri: "http://localhost:3000",
          code,
          client_secret: process.env.KAKAO_CLIENT_SECRET,
        },
      }
    )
    .then((res) => {
      const accessToken = res.data.access_token;
      axios
        .get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data)
        .then(async (data) => {
          const { nickname } = data.properties;
          const { email } = data.kakao_account;
          const existingUser = await user.findOne({
            where: {
              username: nickname,
              email,
            },
          });
          if (!existingUser) {
            const newUser = await user.create({
              username: nickname,
              email,
            });
            response.send({ dataValues: { ...newUser.dataValues, accessToken } });
          } else {
            response.send({ dataValues: { ...existingUser.dataValues, accessToken } });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
