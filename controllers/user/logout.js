const axios = require("axios");

module.exports = (req, res) => {
  const Authorization = req.body.headers.Authorization.split(" ")[1];
  axios
    .post(
      "https://kapi.kakao.com/v1/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
      }
    )
    .then((result) => res.send(result.data))
    .catch((error) => console.log({ error: error.response }));
};
