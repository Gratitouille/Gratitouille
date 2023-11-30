const {Affirmation} = require('../models/models.js');

const affirmationController = {};

// affirmationController.createAff = async function (req, res, next) {
//   try {
//     console.log(req.body);
    
//     const aff = await Affirmation.create(req.body);
//     res.locals.aff = aff;
//     return next()
//   } 
//   catch (error) {
//     return next({
//       message: 'error in affirmation post middleware', error
//     })
//   }
// };

affirmationController.getAffirmation = async function(req, res, next) {
  try {
    console.log("hit get affirmation controller:", req.body); 
    const affirmations = await Affirmation.aggregate([{ $sample: { size: 1 } }]);
    // const affirmations = await Affirmation.find();
    // console.log("affirmations:", affirmations);
    res.locals.affirmations = affirmations;
    // console.log("res.locals:", res.locals.affirmations);
    return next();
  } catch (error) {
    return next({
      message: 'error in getting affirmations', error,
    });
  }
}
module.exports = affirmationController;