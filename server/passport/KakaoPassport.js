import passport from "passport";
import { Strategy as KakaoStrategy } from "passport-kakao";
import env from "dotenv";
env.config();

const KakaoPassport = () => {
  passport.use(
    "kakao",
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID,
        clientSecret: "",
        callbackURL: process.env.CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        //console.log(profile);
        console.log(accessToken);
        console.log(profile);
        //NEEDS DB INSERT 
        const newUser = {
          email: profile._json.kakao_account.email,
          displayName: profile.displayName,
          id: profile.id,
          provider: "kakao",
        };
        console.log(newUser);
        done(null, newUser);
      }
    )
  );
};

export default KakaoPassport;
