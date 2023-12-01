const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
require('dotenv').config();

const PORT = 5555;
const URI = process.env.MY_URI;

// controllers require
const affirmationController = require('./controllers/affController');
const journalController = require('./controllers/journalController');

mongoose.connect(URI)
  .then(() => console.log('Connected to DB.'))
  .catch(err => console.log(err));

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

// //serve html
// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../dist/index.html'));
// });

// serve static pages
app.use(express.static(path.resolve(__dirname, '../dist')));

//affirmation route
app.get('/affirmation', affirmationController.getAffirmation, (req, res) => {
  console.log('getAffirmation route firing');
  res.json(res.locals.affirmations || {});
});

//check journal entry if doesn't exist
app.post('/journal', journalController.createEntry, (req, res) => {
  console.log('createEntry route firing');
  res.json({ message: 'Journal entry created successfully', entry: res.locals.createdEntry });
});

// //check journal entry route
app.get('/journal/:date', journalController.checkEntry);

// Catch-all route to serve the main 'index.html' file
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
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