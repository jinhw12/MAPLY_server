const { video } = require("../../models");

module.exports = async (req, res) => {
    const { playlist_id } = req.params;
    if (!playlist_id) {
        return res.status(403).send("Invaild playlist_id");
    }

    const foundVideos = await video.findAll({ where: { playlist_id: Number(playlist_id) } });
    if (!foundVideos) {
        return res.send([]);
    }

    const refinedData = foundVideos.map(each => {
        const { id, title, thumbnail, video_id } = each.dataValues;
        return { id, title, thumbnail, video_id };
    })

    res.send(refinedData);
};