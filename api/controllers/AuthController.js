/**
   * AuthController
   *
   * @description :: Server-side actions for handling incoming requests.
   * @help        :: See https://sailsjs.com/docs/concepts/actions
*/

const passport = require('passport');
const Logger = require('../services/Logger');
const User = require('../models/User');

module.exports = {

  //Login function
  login: function (req, res) {
    Logger.debug('AuthController.login');

    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        Logger.error(`AuthController.login at passport.authenticate ${err}`);
        return res.send({ message: 'error while login', user });
      }
      req.login(user, function (err) {
        if (err)
          res.send(err);

        Logger.log('User ' + user.id + ' has logged in');

      });
    })(req, res);
  },

  //Logout function
  logout: function (req, res) {
    Logger.debug('AuthController.logout');
    req.logout();
    res.send({ status: 200, message: 'User logged out successfully.' });
    Logger.debug('AuthController.logout: User logged out successfully');
  },

  //Register function
  register: function (req, res) {
    Logger.debug('AuthController.register');

    //TODO: form validation here
    const data = req.body;
    Logger.verbose(data);

    User.createNewUser(data, (err, user) => {
      Logger.debug('AuthController.register at User.createNewUser');
      if (err) {
        if (err === 'User already exists') {
          res.send({ status: 300, message: 'User already exists.' });
        } else {
          res.send({ status: 300, message: 'Something went wrong.' });
        }
      }
      else {
        res.send({ status: 200, message: 'User registered successfully.', response: user });
        // req.login(user, function (err) {

        //   Logger.debug('AuthController.register at req.login');
        //   Logger.log(user);

        //   if (err){
        //     return res.negotiate(err);
        //   }
        //   Logger.debug('AuthController.register at req.login User '+ user.id + ' has logged in.');
        // })
      }
    })
  }
}