const User = require('../models/userModels')
const dbController = {};

dbController.addTrip = (req, res, next) => {
  const { username, trip } = req.body;
  User.updateOne({username: username}, { $push: {trips: trip}}, (err, user) => {
    console.log('Add Trips Hit', user)
    if (err) return next({err});
    return next();
  })
};

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
};

dbController.deleteTrip = async (req, res, next) => {
  const { username, trip } = req.body;
  const queryParam = {};
  queryParam['username'] = username;

  User.find(queryParam).exec(async function (err, user) {
    if (err) return next({err});
    res.locals.trips = user[0].trips;
    for (let i = 0; i < res.locals.trips.length; i++) {
      if (res.locals.trips[i].recAreaName === trip.recAreaName) {
        res.locals.trips.splice(i, 1)
      }
    }
    
    await User.findOneAndUpdate(queryParam, {trips : res.locals.trips})
    return next();
  }
)}

module.exports = dbController;