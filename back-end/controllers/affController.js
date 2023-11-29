const {Affirmation} = require('../models/models.js');

const affirmationController = {};

affirmationController.createAff = async function (req, res, next) {
  try {
    console.log(req.body);
    
    const aff = await Affirmation.create(req.body);
    res.locals.aff = aff;
    return next()
  } 
  catch (error) {
    return next({
      message: 'error in affirmation post middleware', error
    })
  }
};

module.exports = { affirmationController }