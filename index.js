const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./routes/user");
const playlistRouter = require("./routes/playlist");
const videoRouter = require("./routes/video");

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);
app.use("/playlist", playlistRouter);
app.use("/video", videoRouter);

app.listen(port, () => {
  console.log(`Port Number is ${port}`);
});
