//  declare const here and require model
const User = require('../models/userModels')

//  declare const bcrypt 
const bcrypt = require('bcrypt')
//  declare salt set to 10
const salt = 10;

//  controller for requests for Mongo database 
const dbController = {};
//  controller for post requests to logIn
dbController.logIn = (req, res, next) => {
  //  declare consts username and password set as req.body
  // const {username, password} = req.body;
  const name = req.body.username;
  //  query Database for username and password
  User.findOne({name}, function (err, user) {
      //  declare User set as the user returned from the db  
      //  using the bcrypt compare method see if inputted password matches saved password for username
    if (err) return next({err}) 
    res.locals.user = user;
    return next();
});
    //  if password matches set res.locals.user to User 
    //  return next
}


//  controller for post requests to add for creating new user
dbController.add = async (err, req, res, next) => {
  //  declare consts username and password set as req.body
  const {username, password} = req.body;
  //  add new dbModel with username and password passed in to the MongoDB
    //  set res.locals.user to the new dbModel
}

module.exports = dbController;