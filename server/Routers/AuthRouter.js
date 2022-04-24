import express from "express";
import Auth from "../service/Auth.js";
const AuthRouter = express.Router();

AuthRouter.get("/", (req, res) => {
  Auth(req, res);
});

export default AuthRouter;
