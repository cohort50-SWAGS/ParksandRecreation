//  declare const here and require model
const User = require('../models/userModels')

//  declare const bcrypt 
const bcrypt = require('bcrypt')
//  declare salt set to 10
const saltRounds = 10;

//  controller for requests for Mongo database 
const dbController = {};


//  controller for post requests to logIn
dbController.logIn = (req, res, next) => {
  //  declare consts username and password set as req.body
  // const {username, password} = req.body;
  const { username, password } = req.body;

  //  query Database for username and password
  User.findOne({ username }, function (err, user) {
      //  declare User set as the user returned from the db  
      //  using the bcrypt compare method see if inputted password matches saved password for username
    if (err) return next({err}) 
   

    res.locals.user = user;
    return next();
  });
    //  if password matches set res.locals.user to User 
    //  return next
};

dbController.verify = (req, res, next) => {
  //console.log("password:", req.body.password)
  // console.log("res locals user:", res.locals.user)
  const password = req.body.password;
  const hashPass = res.locals.user.password;
  console.log(password, hashPass)
  bcrypt.compare (password, hashPass, function (err, result) {
    if (err) return next({err});
    // console.log("result:", result);
    if (result === true){
      res.locals.response = {
        tripsArray: res.locals.user.trips,
        verified: result
      };
    }else {
      res.locals.response = {
        verified: result
      }
    }
    return next ();
  });
}


//  controller for post requests to add for creating new user
dbController.add = (req, res, next) => {
  //  declare consts username and password set as req.body
  const { username, password } = req.body;
  //invoke hash on password 
  // console.log(req.body)
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) return next({err});
      //  add new dbModel with username and hash passed in to the MongoDB
      // Store hash in your password DB.
      User.create({username: username, password: hash}, function(err, newUser) {
        // console.log(hash);
        if (err) return next({err});
        //  set res.locals.user to the new dbModel
        res.locals.newUser = newUser; 
        return next() 
      });
    });
  });
}

module.exports = dbController;