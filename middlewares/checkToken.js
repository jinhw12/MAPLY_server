const axios = require("axios");

module.exports = {
    async checkToken(req, res, next) {
        const path = req.originalUrl.split("/")[1];
        if (path === "user") {
            next();
        } else {
            const authorization = req.headers['authorization'];
            if (!authorization) {
                res.json({ data: null, message: "Invalid access token" });
            } else {
                const accessToken = authorization.split(' ')[1];
                const tokenValidation = await axios.get(
                    "https://kapi.kakao.com/v1/user/access_token_info",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        withCredentials: true
                    })
                if (tokenValidation.status !== 200) {
                    res.json({ data: null, token_error: "Invalid access token" });
                } else {
                    next();
                }
            }
        }
    }
};