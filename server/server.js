import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import env from "dotenv";
import ProductRouter from "./Routers/ProductRouter.js";
import MyPageRouter from "./Routers/MyPageRouter.js";
import LoginRouter from "./Routers/LoginRouter.js";
import LogoutRouter from "./Routers/LogoutRouter.js";
import ProductFormRouter from "./Routers/ProductFormRouter.js";
import AuthRouter from "./Routers/AuthRouter.js";
import db from "./models/db.js";

env.config();

const app = express();
const port = process.env.PORT;
app.use(cookieParser);
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));
//app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  console.log("passport session save: ", user);
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  console.log("passport session get id: ", id);
  done(null, id);
});

//라우팅
app.use("/isAuth", AuthRouter);
app.use("/auth", LoginRouter);
app.use("/logout", LogoutRouter);
app.use("/product", ProductRouter);
app.use("/mypage", MyPageRouter);
app.use("/new", ProductFormRouter);

//db 자동 연결
db.sequelize
  .sync({ force: false }) //true이면 매번 테이블 새로 생성
  .then(() => {
    app.listen(port, () => console.log(`server is running on ${port}`));
  });
