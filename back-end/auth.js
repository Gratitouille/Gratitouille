
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const { User } = require('./models/models');
require('dotenv').config();

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:5555/callback",
    passReqToCallback: true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    console.log('google strategy')
    try {
      const user = await User.findOne({ googleId: profile.id});
      if (user) return done(null, profile);
      else {
        User.create({ googleId: profile.id }) .then (
          (data) => {
            console.log(data)
            return done(null,profile);
          }
        )
      }
    } catch (error) {
      return done(error)
    }
  }
  ));

passport.serializeUser((user,done)=>{
  done(null,user); 
});

passport.deserializeUser((user,done)=>{
  done(null,user);
});