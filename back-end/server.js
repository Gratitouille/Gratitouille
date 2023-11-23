const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = ('cookie-parser');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = 5555;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

//serve html
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});



//404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

//global error handleer
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;