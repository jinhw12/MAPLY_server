const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./routes/user");
const playlistRouter = require("./routes/playlist");
const videoRouter = require("./routes/video");
const { checkToken } = require("./middlewares/checkToken")

require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(cors(
  {
    origin: [`${process.env.REACT_APP_CLIENT}`],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  }
));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(checkToken);

app.use("/user", userRouter);
app.use("/playlist", playlistRouter);
app.use("/video", videoRouter);

app.listen(port, () => {
  console.log(`Port Number is ${port}`);
});
