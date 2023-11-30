const express = require("express");

const app = express();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const id = process.env.clientID;
const secret = process.env.clientSecret;
passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:5555/oauth"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    
    res.status(200).json({message: success});
  });