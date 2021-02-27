// /**
//    * AuthController
//    *
//    * @description :: Server-side actions for handling incoming requests.
//    * @help        :: See https://sailsjs.com/docs/concepts/actions
// */

// const passport = require('passport');
// const Logger = require('../services/Logger');
// var jwt = require('jsonwebtoken')

// module.exports = {
//   login: async function(req, res) {
// 		var user = await User.getSingleUser({
// 			email: req.param('email')
// 		})
// 		if (!user) return res.notFound()

// 		await bcrypt.compare(req.param('password'), user.password)

// 		// if no errors were thrown, then grant them a new token
// 		// set these config vars in config/local.js, or preferably in config/env/production.js as an environment variable
// 		var token = jwt.sign({user: user.id}, sails.config.jwtSecret, {expiresIn: sails.config.jwtExpires})
// 		// set a cookie on the client side that they can't modify unless they sign out (just for web apps)
// 		res.cookie('sailsjwt', token, {
// 			signed: true,
// 			// domain: '.yourdomain.com', // always use this in production to whitelist your domain
// 			maxAge: sails.config.jwtExpires
// 		})
// 		// provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)
// 		return res.ok(token)
// 	},

  //Login function
  // login: async function (req, res) {
  //   Logger.debug('AuthController.login');

  //   passport.authenticate('local', function (err, user, info) {
  //     Logger.debug('AuthController.login at passport.authenticate');

  //     if ((err) || (!user)) {
  //       Logger.error(`AuthController.login at passport.authenticate ${err}`);
  //       return res.send({ message: 'error while login', user });
  //     }
  //     req.login(user, function (err) {
  //       if (err)
  //         res.send(err);

  //       Logger.log('User ' + user.id + ' has logged in');

  //     });

  //     // // if no errors were thrown, then grant them a new token
  //     // // set these config vars in config/local.js, or preferably in config/env/production.js as an environment variable
  //     // var token = jwt.sign({ user: user.id }, sails.config.jwtSecret, { expiresIn: sails.config.jwtExpires })
  //     // // set a cookie on the client side that they can't modify unless they sign out (just for web apps)
  //     // res.cookie('sailsjwt', token, {
  //     //   signed: true,
  //     //   // domain: '.yourdomain.com', // always use this in production to whitelist your domain
  //     //   maxAge: sails.config.jwtExpires
  //     // })
  //     // // provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)
  //     // return res.ok(token)
  //   })(req, res);
  // },

  //Logout function
//   logout: function (req, res) {
//     Logger.debug('AuthController.logout');
//     req.logout();
//     res.send({ status: 200, message: 'User logged out successfully.' });
//     Logger.debug('AuthController.logout: User logged out successfully');
//   },

//   //Register function
//   register: function (req, res) {
//     Logger.debug('AuthController.register');

//     //TODO: form validation here
//     const data = req.body;
//     Logger.verbose(data);

//     User.createNewUser(data, (err, user) => {
//       Logger.debug('AuthController.register at User.createNewUser');
//       if (err) {
//         if (err === 'User already exists') {
//           res.send({ status: 300, message: 'User already exists.' });
//         } else {
//           res.send({ status: 300, message: 'Something went wrong.' });
//         }
//       }
//       else {
//         res.send({ status: 200, message: 'User registered successfully.', response: user });
//         // req.login(user, function (err) {

//         //   Logger.debug('AuthController.register at req.login');
//         //   Logger.log(user);

//         //   if (err){
//         //     return res.negotiate(err);
//         //   }
//         //   Logger.debug('AuthController.register at req.login User '+ user.id + ' has logged in.');
//         // })
//       }
//     })
//   }
// }