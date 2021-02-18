const { loggers } = require('winston');
const Restaurant = require('../models/Restaurant');
const Logger = require('../services/Logger');

module.exports = {
    /**
   * `RestaurantController.create()`
   */
    createRestaurants(data, callback) {
        Logger.debug('RestaurantService.createRestaurants');
        
        console.log('data', data.restaurantName)
        Restaurant.getRestaurantByName(data.restaurantName, (err, restaurant) => {
            if (err) {
                Logger.error(`RestaurantService.createRestaurants at RestaurantService.getRestaurantByName ${err}`);
                callback(err);
            } else if (restaurant!==undefined) {
                Logger.debug('RestaurantService.createRestaurants at RestaurantService.getRestaurantByName: Restaurant Already Present');

                callback('Already Present');
            } else if(restaurant === undefined) {
                Restaurant.createRestaurants(data, (err, newRestaurant) => {
                    if (err) {
                        Logger.error(`RestaurantService.createRestaurants at Restaurant.createRestaurants ${err}`);
                        callback(err);
                    } else {
                        Logger.info('RestaurantService.createRestaurants: Restaurant created successfully');
                        Logger.log(newRestaurant);
                        callback(newRestaurant);
                    }
                })
            }
        })
    },

    /**
     * `RestaurantController.find()`
     */
    getAllRestaurants(callback) {
        Logger.debug('RestaurantService.getAllRestaurants');
        Restaurant.getAllRestaurants((err, restaurantData) => {
            if (err) {
                Logger.error(`RestaurantService.getAllRestaurants at Restaurant.getAllRestaurants ${err}`);
                callback(err);
            } else {
                Logger.info('Restaurants List fetched successfully.');
                callback(null, restaurantData);
            }
        });

    },

    /**
     * `RestaurantService.findOne()`
     */
    getRestaurantByName(restaurantName, callback) {
        Logger.debug('RestaurantService.getRestaurantByName');
        Restaurant.getRestaurantByName(restaurantName, (error, restaurant) => {
            if (error) {
                Logger.error(`RestaurantService.getRestaurantByName at Restaurant.getRestaurantByName ${error}`);
                callback(error);
            } else {
                Logger.info('Restaurant fetched successfully.');
                callback(null, restaurant);
            }
        });
    },

    /**
     * `RestaurantService.findOne()`
     */
    getRestaurantById(id, callback) {
        Logger.debug('RestaurantService.getRestaurantById');

        Restaurant.getRestaurantById(id, (error, restaurant) => {
            if (error) {
                Logger.error(`RestaurantService.getRestaurantById at Restaurant.getRestaurantById ${error}`);
                callback(error);
            } else {
                if(restaurant!==undefined)
                {
                    Logger.info('Restaurant fetched successfully.');
                    Logger.verbose(restaurant)
                    callback(null, restaurant);
                }
                else{
                    Logger.verbose(restaurant)
                    callback(null, restaurant);
                }
            }
        });
    },

    /**
     * `RestaurantService.find()`
     */
    getRestaurantByLocation(address, callback){
        Logger.debug('RestaurantService.getRestaurantByLocation');

        Restaurant.getRestaurantByLocation(address, (error, restaurant) => {
            if (error) {
                Logger.error(`RestaurantService.getRestaurantByLocation at Restaurant.getRestaurantByLocation ${error}`);
                callback(error);
            } else {
                if(restaurant!==undefined)
                {
                    Logger.info('Restaurants fetched successfully.');
                    Logger.verbose(restaurant)
                    callback(null, restaurant);
                }
                else{
                    Logger.verbose(restaurant)
                    callback(null, restaurant);
                }
            }
        });
    },

    /**
     * `RestaurantController.update()`
     */
    updateRestaurant(id, data, callback) {
        Logger.debug('RestaurantService.updateRestaurant');

        Restaurant.updateRestaurant(id, data, (err, restaurantData) => {
            if (err) {
                Logger.error(`RestaurantService.updateRestaurant at Restaurant.updateRestaurant: ${err}`);
                callback(err);
            }
            else {
                Logger.info('Restaurant updated successfully.');
                Logger.log(`after update: ${JSON.stringify(restaurantData)}`);
                callback(null, restaurantData);
            }
        });
    },

    /**
     * `RestaurantController.delete()`
     */
    deleteRestaurant(id, callback) {
        Logger.debug('RestaurantService.deleteUser');

        Restaurant.deleteRestaurant(id, (err, data) => {
            if (err) {
                Logger.error(`RestaurantService.deleteRestaurant at Restaurant.deleteRestaurant ${err}`);
                callback(err);
            } else {
                Logger.info('Restaurant deleted successfully.');
                callback(null, data);
            }
        })
    }
}

