const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const affirmationSchema = new mongoose.Schema({
  affirmation: {type: String}
})

const Affirmation = mongoose.model('Affirmation', affirmationSchema);

const userSchema = new mongoose.Schema({
  googleId: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);

const journalSchema = new mongoose.Schema({
  date: {type: Object, required: true}, 
  gratefulInput: {type: String}
})

const JournalEntry = mongoose.model('Journalentry', journalSchema);

module.exports = {
  Affirmation,
  User,
  JournalEntry
}