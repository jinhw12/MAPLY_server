const axios = require("axios");

module.exports = {
    async checkToken(req, res, next) {
        const path = req.originalUrl.split("/")[1];
        if (path === "user") {
            next();
        } else {
            try {
                const authorization = req.headers['authorization'];
                const accessToken = authorization.split(' ')[1];
                await axios.get(
                    "https://kapi.kakao.com/v1/user/access_token_info",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        withCredentials: true
                    })
                next();
            } catch (err) {
                res.send({ error_code: 401, message: "Invalid access token" });
            }
        }
    }
};