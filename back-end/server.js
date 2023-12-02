const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
const passport = require('passport');
require('./auth');
const session = require('express-session');

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

//IS LOGGED IN MIDDLEWARE. ITS IN THE SERVER THO
function isLoggedIn(req,res,next){
  console.log('checking for login');
  console.log('req user', req.user);
  req.user ? next() : res.sendStatus(401);
};

// serve static pages
app.use(express.static(path.resolve(__dirname, '../dist')));

//AUTH
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize());
app.use(passport.session());

//OAUTH ROUTES
app.get('/oauth',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));
app.get('/callback',
    passport.authenticate( 'google', {
        successRedirect: '/authorized',
        failureRedirect: '/auth/google/failure'
}));
app.get('/auth/google/failure', (req, res)=>{
  res.send('Oops');
})
app.get('/authorized',isLoggedIn, (req,res)=> {
  const name = req.user.displayName;
  res.send('we did it, ' + name);
})
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).redirect('/');
})


//affirmation route
app.get('/affirmation', isLoggedIn, affirmationController.getAffirmation, (req, res) => {
  console.log('getAffirmation route firing');
  res.json(res.locals.affirmations || {});
});

//check journal entry if doesn't exist
app.post('/journal', isLoggedIn, journalController.createEntry, (req, res) => {
  console.log('createEntry route firing');
  res.json({ message: 'Journal entry created successfully', entry: res.locals.createdEntry });
});

// //check journal entry route
app.get('/journal/:date', isLoggedIn, journalController.checkEntry);

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