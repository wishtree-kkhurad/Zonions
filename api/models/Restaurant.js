/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Logger = require("../services/Logger");

module.exports = {

  attributes: {
    restaurantName: {
      type: 'string',
      required: true,
      columnName: 'restaurant_name'
    },
    tagline: {
      type: 'string',
      columnName: 'tag_line',
      defaultsTo: 'N/A',
      columnName: 'tagline'
    },
    address: {
      type: 'string',
      required: true,
      columnName: 'address'
    },
    phone: {
      type: 'string',
      required: true,
      maxLength: 10,
      columnName: 'phone'
    },
    openingTime: {
      type: 'string',
      columnName: 'opening_time',
      defaultsTo: 'N/A',
    },
    closingTime: {
      type: 'string',
      columnName: 'closing_time',
      defaultsTo: 'N/A',
    },
    imageData: {
      type: 'string',
      required: false,
      defaultsTo: 'N/A',
    },
    imageName: {
      type: 'string',
      defaultsTo: 'none',
      columnName: 'img_alt',
      defaultsTo: 'default image',

    },
    isActive: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'active_status'
    }
  },

  async createRestaurants(values, callback) {
    try {
      console.log('in model create restro', values);
      const createdRecord = await Restaurant.create(values).fetch();
      return callback(null, createdRecord);
    } catch (error) {
      return callback(error);
    }
  },

  async getAllRestaurants(callback) {
    try {
      const restaurants = await Restaurant.find({});
      return callback(null, restaurants);
    } catch (error) {
      return callback(error);
    }
  },

  async getRestaurantByName(name, callback) {
    Logger.debug('Restaurant.getRestaurantByName')
    try {
      const data = await Restaurant.find({ restaurantName: name});

      let retrievedRestro = JSON.stringify(data[0])
      Logger.verbose(`Restaurant.getRestaurantByName at try: ${retrievedRestro}`)

      if(retrievedRestro === undefined)
        return callback(null, undefined);
      else
      return callback(null, retrievedRestro)
    } catch (error) {
      Logger.error(`Restaurant.getRestaurantByName at catch: ${error}`)
      return callback(error);
    }
  },

  async getRestaurantById(id, callback) {
    try {
      const data = await Restaurant.find({ id: id });
      if(data[0] !== undefined)
        return callback(null, data[0]);
      else
        return callback(null, data[0]);
    } catch (error) {
      return callback(error);
    }
  },

  async updateRestaurant(id, restaurantData, callback) {
    try {
    
      var updatedRecord = await Restaurant.update({ id:id }).set(restaurantData).fetch();
      console.log('updated record', updatedRecord)
      return callback(null, updatedRecord);
    }
    catch (error) {
      return callback(error);
    }
  },

  async deleteRestaurant(id, callback) {
    try {
      const data = await Restaurant.find({ id: id });
      console.log('in delete', data)
      if (data) {
        await Restaurant.destroy(data[0].id);
        return callback(null, data);
      }
      else {
        return callback('error while deleting', null);
      }
    } catch (error) {
      return callback(error);
    }
  }
};