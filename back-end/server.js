const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = ('cookie-parser');

const PORT = 5555;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// //serve html
// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });






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