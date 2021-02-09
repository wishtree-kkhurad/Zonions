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
        Logger.error(`AuthController.login at passport.authenticate ${err}`);
        return res.send({ message: 'error while login', user });
      }
      req.login(user, function (err) {
        if (err)
          res.send(err);
        // sails.log('User'+ user.id + 'has logged in');
        Logger.log('User '+ user.id + ' has logged in');

      }); 
    })(req, res);
  },

  //Logout function
  logout: function (req, res) {
    Logger.debug('AuthController.logout');
    // sails.log('AuthController.logout')
    req.logout();
    res.send({ status: 200, message: 'User logged out successfully.' });
    Logger.debug('AuthController.logout: User logged out successfully');
  },

  //Register function
  register: function (req, res) {
    Logger.debug('AuthController.register');
    // sails.log('AuthController.register');

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
        
        Logger.debug('AuthController.register at User.create');
        Logger.log(user);
        // sails.log('AuthController.register at req.login',user);
        if (err){
          return res.negotiate(err);
        }
        Logger.debug('AuthController.register at req.login User '+ user.id + ' has logged in.');
        // sails.log('AuthController.register at req.login User'+ user.id + ' has logged in.');

      })
    })
  }
};