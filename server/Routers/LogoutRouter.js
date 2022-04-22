import express from "express";
const LogoutRouter = express.Router();

LogoutRouter.get("/", function (req, res) {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.clearCookie("authCookie");
    res.redirect(process.env.CLIENT_URL_PORT);
  });
});
export default LogoutRouter;
