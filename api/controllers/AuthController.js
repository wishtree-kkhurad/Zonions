/**
   * AuthController
   *
   * @description :: Server-side actions for handling incoming requests.
   * @help        :: See https://sailsjs.com/docs/concepts/actions
*/

const passport = require('passport');
const Logger = require('../services/Logger');
module.exports = {

  //Login function
  login: function (req, res) {
    Logger.debug('AuthController.login');
    
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user))
      {
        sails.log('error in passport.authenticate--backend')
        return res.send({ message: info.message, user });
      }
      req.login(user, function (err) {
        if (err)
          res.send(err);
        sails.log('User'+ user.id + 'has logged in');
      }); 
    })(req, res);
  },

  //Logout function
  logout: function (req, res) {
    Logger.debug('AuthController.logout');
    req.logout();
    res.send({ status: 200, response: logout, message: 'User logged out successfully.' });
  },

  //Register function
  register: function (req, res) {
    Logger.debug('AuthController.register');
    //TODO: form validation here
    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      description: req.body.description
    }
    User.create(data).fetch().exec(function (err, user) {
      if(err)
        return res.negoiate(err);

      //TODO: Maybe send confirmation email to the user before login
      req.login(user, function (err) {
        Logger.debug('AuthController.register at req.login');
        Logger.debug('AuthController.register at req.login user details: ', user);

        if (err){
          return res.negotiate(err);
        }
        Logger.debug('AuthController.register at req.login User'+ user.id + ' has logged in.');
      })
    })
  }
};