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

journalController.checkEntry = async function(req, res, next) {
try {
    const { date } = req.params;
    // Use the date parameter to check if a journal entry exists
    const existingEntry = await JournalEntry.findOne({ date });

    if (existingEntry) {
      // If entry exists, send it in the response
      res.status(200).json(existingEntry);
    } else {
      // If entry does not exist, create an empty entry and send it in the response
      const newEntry = await JournalEntry.create({ date, gratefulInput: '' });
      res.status(200).json(newEntry);
    }
  } catch (error) {
    console.error('Error checking or creating journal entry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

journalController.saveUserResponse = async function (req, res, next) {
    try {
      const { date } = req.params;
      const { gratefulInput } = req.body;
      console.log("saveUserResponse request body:", req.body); // Log the entire request body
     console.log("gratefulInput response:", gratefulInput);

      // Find the journal entry for the given date
      const existingEntry = await JournalEntry.findOne({ date });
  
      if (existingEntry) {
        // Update the journal entry with the user's response
        existingEntry.gratefulInput = gratefulInput;
        await existingEntry.save();
        res.status(200).json(existingEntry);
      } else {
        // Handle the case where the entry doesn't exist
        res.status(404).json({ error: 'Journal entry not found' });
      }
    } catch (error) {
      console.error('Error saving user response:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = journalController;