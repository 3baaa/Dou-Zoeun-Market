import express from "express";
import passport from "passport";
import KakaoPassport from "../passport/KakaoPassport.js";

const LoginRouter = express.Router();

KakaoPassport();

LoginRouter.get("/kakao", passport.authenticate("kakao"));

LoginRouter.get(
  "/callback",
  passport.authenticate("kakao", {
    failureRedirect: process.env.CLIENT_URL_PORT,
  }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const isTrue = req.isAuthenticated(); //true, false
      const user = req.user; //user 정보를 세션에 띄워줘야 사람이름 이메일 나이 등등을 받아올 수 있다.
    
      res.cookie("authCookie", { user, isTrue });
      res.redirect(process.env.CLIENT_URL_PORT);
    } else {
      console.log("fail");
    }
  }
);


export default LoginRouter;
