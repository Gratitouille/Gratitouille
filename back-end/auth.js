
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:5555/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile)
    done(null,profile);
  }
));

passport.serializeUser((user,done)=>{
  done(null,user); 
});

passport.deserializeUser((user,done)=>{
  done(null,user);
});