
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var Logger = require('../services/Logger');
const User = require('../models/User');
var UserService = require('../services/UserService')

module.exports = {
    getSingleUser: function (req, res, next) {
        Logger.verbose('UserController.getSingleUser');
        const email = req.param.email;
        UserService.getSingleUser(email, (err, userData) => {
            if (err) {
                res.send({ status: 300, message: 'serverError' });
            } else {
                res.send({ status: 200, data: userData });
            }
        });

    },
    getAllUsers: function (req, res, next) {
        Logger.verbose('UserController.getAllUsers');
        
        UserService.getAllUsers((err, userData) => {
            if (err) {
                res.send({ status: 300, message: 'serverError' });
            } else {
                res.send({ status: 200, data: userData });
            }
        });
    },

    deleteUser: function (req, res, next) {
        Logger.debug('UserController.deleteUser');
        // const uid = req.body.id;
        const email = req.body.email;

        Logger.verbose(email);

        if (!email) {
            res.send({ status: 300, message: 'serverError' });
        } else {
            UserService.deleteUser(email, (err, deletedUser) => {
                if (err) {
                    res.send({ status: 300, message: 'serverError' });
                } else {
                    res.send({ status: 200, response: deletedUser, message: 'deleteUserSuccess' });
                }
            });
        }
    }

}





