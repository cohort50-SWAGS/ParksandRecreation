const User = require('../models/userModels')
const dbController = {};

dbController.addTrip = (req, res, next) => {
  const { username, trip } = req.body;
  User.updateOne({username: username}, { $push: {trips: trip}}, (err, user) => {
    if (err) return next({err});
    //console.log(user)
    //res.locals.updatedTrip = user.trips;
    return next();
  })
}

// add get trips 


module.exports = dbController;