const User = require('../models/userModels')
const dbController = {};

dbController.addTrip = (req, res, next) => {
  const { username, trip } = req.body;
  console.log('req.body', req.body);
  User.updateOne({username: username}, { $push: {trips: trip}}, (err, user) => {
    console.log('Add Trips Hit', user)
    if (err) return next({err});
    return next();
  })
}

// add get trips 
dbController.getTrips = (req, res, next) => {
  console.log(req.params.username);

  const queryParam = {};
  queryParam['username'] = req.params.username;
  
  
  User.find(queryParam).exec(function (err, user) {
    if (err) return next({err});
    res.locals.trips = user[0].trips;
    return next();
  })
}


module.exports = dbController;