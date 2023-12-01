const {JournalEntry} = require('../models/models.js');

const journalController = {};

journalController.createEntry = async function(req, res, next) {
    try {
        console.log("req.params:", req.body.date);
        // Implement logic to create a new journal entry for the selected date in the database
        // For example, if you have a Journal model:
        const newJournalEntry = new JournalEntry({
          date: req.body.date,
          gratefulInput: '' // You can initialize with any default content
        });
  
        await newJournalEntry.save();
  
        res.status(201).json(newJournalEntry);
      } catch (error) {
        next(error);
      }
}
module.exports = journalController;