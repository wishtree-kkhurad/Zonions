// /**
//    * AuthController
//    *
//    * @description :: Server-side actions for handling incoming requests.
//    * @help        :: See https://sailsjs.com/docs/concepts/actions
// */

const passport = require('passport');
const Logger = require('../services/Logger');
var jwt = require('jsonwebtoken')

module.exports = {

  //Login function
  login: function (req, res, next) {
    Logger.debug('AuthController.login');

    passport.authenticate('local', function (err, user, info) {
      Logger.debug(`AuthController.login at passport.authenticate ${user}`);

      if (err) {
        Logger.error(`AuthController.login at passport.authenticarte ${err}`);
        return res.send({ status: 300, message: err, user: null });
      }
      if (!user) {
        Logger.verbose('User not found');
        return res.send({ status: 300, message: 'User not found', user: null });
      }

      req.logIn(user, (logInErr)=> {
        
        if (logInErr) {
          Logger.error(`AuthController.login at req.logIn ${logInErr}`);
          return res.send({ status: 300, message: logInErr, user: null });
        }
        req.session.user = { id: user.id };
        // req.session.userId = user.id;
        // console.log("req.session.userId = ", req.session.userId)
        req.session.email = user.email;
        
        // if no errors were thrown, then grant them a new token
        // set these config vars in config/local.js, or preferably in config/env/production.js as an environment variable
        //var token = jwt.sign({ user: user.id }, sails.config.jwtSecret, { expiresIn: sails.config.jwtExpires })
        // set a cookie on the client side that they can't modify unless they sign out (just for web apps)
        // res.cookie('sailsjwt', token, {
        //   signed: true,
        //   // domain: '.yourdomain.com', // always use this in production to whitelist your domain
        //   maxAge: sails.config.jwtExpires
        // })
        Logger.log('User ' + user.email + ' has logged in');

        // provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)
        return res.send({
          message: `${user.email} has been logged in`,
          data: user
        })
      });
    })(req, res);
  },

  //Logout function
  //   logout: function (req, res) {
  //     Logger.debug('AuthController.logout');
  //     req.logout();
  //     res.send({ status: 200, message: 'User logged out successfully.' });
  //     Logger.debug('AuthController.logout: User logged out successfully');
  //   }

}