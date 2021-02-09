/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const RestaurantService = require('../services/RestaurantService');

module.exports = {

  createRestaurants: function (req, res, next) {
    Logger.verbose('RestaurantController.createRestaurant');

    // let param = req.allParams();
    // console.log('create: ', param)
      
    // Logger.verbose(param);

    //   const restaurantData =  Restaurant.create({
    //     restaurantName:param.restaurantName,
    //     tagline:param.tagline,
    //     address: param.address,
    //     phone: param.phone,
    //     openingTime: param.openingTime,
    //     closingTime: param.closingTime,
    //     imgUrl: param.imgUrl,
    //     imgAlt: param.imgAlt
    //   })

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

    RestaurantService.getAllRestaurants((err, restaurantData) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurantData });
      }
    });
  },

  getRestaurantByName: function (req, res, next) {
    Logger.verbose('RestaurantController.getRestaurantByName');

    RestaurantService.getRestaurantByName((err, restaurant) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurant });
      }
    });
  },

  getRestaurantById: function (req, res, next) {
    Logger.verbose('RestaurantController.getRestaurantById');

    RestaurantService.getRestaurantById((err, restaurant) => {
      if (err) {
        res.send({ status: 300, message: 'serverError' });
      } else {
        res.send({ status: 200, response: restaurant });
      }
    });
  },

  updateRestaurant: function (req, res, next) {
    Logger.verbose('RestaurantController.updateRestaurant');

    let param = req.allParams();
    const id = param.id;

    Logger.verbose(`update params: ${param}`);
    Logger.verbose(`update for id: ${id}`);


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

    Logger.verbose(`attribute from Front end: ${attribute}`);

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