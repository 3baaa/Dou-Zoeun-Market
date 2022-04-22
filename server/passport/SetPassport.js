import express from "express";
import passport from "passport";

const SetPassport = () => {
  passport.serializeUser(function (user, done) {
    console.log("passport session save: ", user.id);
    done(null, user);
  });

  passport.deserializeUser(function (id, done) {
    console.log("passport session get id: ", id);
    done(null, user);
  });
};

export default SetPassport;
