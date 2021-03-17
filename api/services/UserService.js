const sails = require('sails');
const User = require('../models/User');
const Logger = require('../services/Logger');

module.exports = {

  createUser(data, callback) {
    Logger.debug('UserService.createUser');

    User.createUser(data, (err, userData) => {
      if (err) {
        Logger.error(`UserService.createUser at User.createUser ${err}`);
        callback(err, null);
      } else {
        Logger.info('User created successfully.');
        callback(null, userData);
      }
    });
    },

  getAllUsers(callback) {
    Logger.debug('UserService.getUserList');

    User.getAllUsers((err, userData) => {
      if (err) {
        Logger.error(`UserService.getAllUsers at User.getAllUsers ${err}`);
        callback(err, null);
      } else {
        Logger.info('User List fetched successfully.');
        callback(null, userData);
      }
    });
    },

    getSingleUser(email, callback) {
        Logger.debug('UserService.getSingleUser');
    
        User.getSingleUser(email, (err, user) => {
          if (err) {
            Logger.error(`UserService.getSingleUser at User.getSingleUser ${err}`);
            callback(err);
          } else {
            Logger.info('User fetched successfully.');
            callback(null, user);
          }
        });
    },

  deleteUser(email, callback) {
    Logger.debug('UserService.deleteUser');

    User.deleteUser(email, (err, data) => {
      if (err) {
        Logger.error(`UserService.deleteUser at User.deleteUser ${err}`);
        callback(err);
      } else {
        Logger.info('User deleted successfully.');
        callback(null, data);
      }
    });
  },
};