const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const app = express();
require('dotenv').config();

const PORT = 5555;
const URI = process.env.MY_URI;

// controllers require
const {affirmationController} = require('./controllers/affController');

mongoose.connect(URI)
  .then(() => console.log('Connected to DB.'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// serve static pages
app.use(express.static(path.resolve(__dirname, '../dist')));

//route to serve the main 'index.html' file
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


const {User} = require('./models/models.js');
const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:5555/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log('in google strategy callback function')
    console.log('profile', profile)
    const user = await User.create({ googleId: profile.id });
    if (user) return cb(user);
  }
));

//middleware api
app.get('/oauth',(req, res, next) => {
  console.log('oauth endpoint hit')
  next();
},
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/callback', (req, res, next) => {
  console.log('callback endpoint hit')
  next();
},
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('in passport auth middleware')
    // Successful authentication, redirect home.
    res.redirect('/');
  });





app.post('/api', affirmationController.createAff, (req, res) => {
  console.log('heyyyyy')
  res.status(200).json(res.locals.aff);
})


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