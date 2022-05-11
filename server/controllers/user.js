const userController = {};
const User = require('../models/userModels')


const bcrypt = require('bcrypt')

const saltRounds = 10;

userController.logIn = (req, res, next) => {
  const { username, password } = req.body;
  
  User.findOne({ username }, function (err, user) {
    if (err) return next({err});
    
    const hashPass = user.password;
    bcrypt.compare(password, hashPass, function (err, result) {
      if (err) return next({err});
      if (result === true){
        res.locals.response = {
          verified: result
        };
      }
      else {
        res.locals.response = {
          verified: result
        };
      }
      return next();
    })
  });
};


userController.add = (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) return next({err});
      User.create({username: username, password: hash}, function(err, newUser) {
        if (err) return next({err});
        res.locals.response = {
          verified: true
        }; 
        return next() 
      });
    });
  });
}


module.exports = userController;