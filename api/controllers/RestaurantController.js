/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Logger = require('../services/Logger');
const RestaurantService = require('../services/RestaurantService');

module.exports = {

  // uploadFile: function (req, res) {
  //   req.file('file').upload({
  //     adapter: require('skipper-gridfs'),
  //     uri: 'mongodb://localhost:27017/zonions'
  //   }, function (err, filesUploaded) {
  //     if (err) 
  //       return res.serverError(err);
  //     return res.json({"status":200, "file": filesUploaded});
  //   });
  // },

  createRestaurants: function (req, res, next) {
    Logger.verbose('RestaurantController.createRestaurant');

    const restaurantData = req.body;
    Logger.verbose(restaurantData);

    RestaurantService.createRestaurants(restaurantData, (err, data) => {
      if (err) {
        if (err === 'Already Present') {
          res.send({ status: 300, message: 'Restaurant alredy exists.' });
        } else {
          res.send({ status: 300, message: 'Something went wrong.' });
        }
      }
      else {
        res.send({ status: 200, message: 'Restaurant created successfully.', response: data });
      }
    })
  },

  getAllRestaurants: function (req, res, next) {
    Logger.verbose('RestaurantController.getAllRestaurants');

    const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
    const skip = parseInt(req.query.skip);// Make sure to parse the skip to number

    // console.log('req.qyery.sortBy',req.query.sortBy)
    // const sort = [];
    // if(req.query.sortBy){
    //   const str = req.query.sortBy.split(':');
    //   console.log('str=',str)
    //   sort[str[0]] = str[1] ==='desc'?-1:1;
    // }

    RestaurantService.getAllRestaurants(limit, skip, (err, restaurantData) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurantData });
      }
    });
  },

  getRestaurantByName: function (req, res, next) {
    Logger.verbose('RestaurantController.getRestaurantByName');

    RestaurantService.getRestaurantByName(req.allParams().text,(err, restaurant) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurant });
      }
    });
  },

  getRestaurantByLocation: function(req, res, next){
    Logger.verbose('RestaurantController.getRestaurantByLocation');
    Logger.info('input address', req.allParams().address);
    
    RestaurantService.getRestaurantByLocation(req.allParams().address, (err, restaurants) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        if(restaurants!==undefined)
          res.send({ status: 200, response: restaurants});
        else{
          res.send({ status: 404, response: 'Restaurant does not exist' });
        }
      }
    });
  },

  getRestaurantById: function (req, res, next) {
    Logger.verbose('RestaurantController.getRestaurantById');

    RestaurantService.getRestaurantById(req.allParams().id, (err, restaurant) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        if(restaurant!==undefined)
          res.send({ status: 200, response: restaurant });
        else{
          res.send({ status: 404, response: 'Restaurant does not exist' });
        }
      }
    });
  },

  updateRestaurant: function (req, res, next) {
    Logger.verbose('RestaurantController.updateRestaurant');

    let param = req.allParams();
    const id = param.id;

    let attribute = {};

    if (param.restaurantName)
      attribute.restaurantName = param.restaurantName;
    if (param.address)
      attribute.address = param.address;
    if (param.phone)
      attribute.phone = param.phone;
    if (param.openingTime)
      attribute.openingTime = param.openingTime;
    if (param.closingTime)
      attribute.closingTime = param.closingTime;
    if (param.imgUrl)
      attribute.imgUrl = param.imgUrl;
    if (param.imgAlt)
      attribute.imgAlt = param.imgAlt;
    if (param.tagline)
      attribute.tagline = param.tagline;
    if (param.isActive) {
      attribute.isActive = param.isActive;
    }
    else {
      attribute.isActive = param.isActive;
    }

    console.log('attribute for update from controller', attribute)

    RestaurantService.updateRestaurant(id, attribute, (err, restaurantData) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurantData });
      }
    });
  },

  deleteRestaurant: function (req, res, next) {
    Logger.debug('RestaurantController.deleteRestaurant');
    const id = req.params.id
    Logger.verbose(id);
    if (!id) {
      res.send({ status: 300, message: 'serverError' });
    } else {
      RestaurantService.deleteRestaurant(id, (err, deletedRestaurant) => {
        if (err) {
          res.send({ status: 300, message: 'serverError' });
        } else {
          res.send({ status: 200, response: deletedRestaurant, message: 'deleteRestaurantSuccess' });
        }
      });
    }

  }

};