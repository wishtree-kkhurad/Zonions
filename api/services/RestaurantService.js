const Restaurant = require('../models/Restaurant');
const Logger = require('../services/Logger');

module.exports = {
    /**
   * `RestaurantController.create()`
   */
    createRestaurants(data, callback) {
        Logger.debug('RestaurantService.create');

        Restaurant.getRestaurantByName({ restaurantName: data.restaurantName }, (err, restaurant) => {
            if (err) {
                Logger.error(`RestaurantService.create at RestaurantService.getRestaurantByName ${err}`);
                callback(err);
            } else if (restaurant) {
                callback('Restaurant Already Present');
            } else {
                Restaurant.createRestaurants(data, (err) => {
                    if (err) {
                        Logger.error(`RestaurantService.create at Restaurant.createRestaurants ${err}`);
                        callback(err);
                    } else {
                        Logger.debug('RestaurantService.create: Restaurant created successfully');
                        Logger.log(data);
                        callback(data);
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
                callback(null, rest);
            }
        });

    },

    /**
     * `RestaurantController.findOne()`
     */
    getRestaurantByName(restaurantName, callback) {
        Logger.debug('RestaurantService.getRestaurantByName');
        Restaurant.getRestaurantById(restaurantName, (error, restaurant) => {
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
         * `RestaurantController.findOne()`
         */
    getRestaurantById(id, callback) {
        Logger.debug('RestaurantService.getRestaurantById');

        Restaurant.getRestaurantById(id, (error, restaurant) => {
            if (error) {
                Logger.error(`RestaurantService.getRestaurantById at Restaurant.getRestaurantById ${error}`);
                callback(error);
            } else {
                Logger.info('Restaurant fetched successfully.');
                callback(null, restaurant);
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
                Logger.log('after update: ', restaurantData);
                callback(null, restaurantData);
            }
        });
    },

    /**
     * `RestaurantController.delete()`
     */
    deleteRestaurant(id, callback) {
        Logger.debug('UserService.deleteUser');

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

