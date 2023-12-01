const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const affirmationSchema = new mongoose.Schema({
  affirmation: {type: String}
})

const Affirmation = mongoose.model('affirmation', affirmationSchema);

const userSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  // email: {type: String, required: true},
  googleId: {type: String, required: true}
})

const User = mongoose.model('user', userSchema);

module.exports = {
  Affirmation,
  User
}