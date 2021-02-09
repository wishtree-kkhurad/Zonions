/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

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
      defaultsTo: '',
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
      columnName: 'opening_time'
    },
    closingTime: {
      type: 'string',
      columnName: 'closing_time'
    },
    imgUrl: {
      type: 'string',
      isURL: true,
      columnName: 'img_url'
    },
    imgAlt: {
      type: 'string',
      defaultsTo: 'alt_img',
      columnName: 'img_alt'
    },

    isActive: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'active_status'
    }
  },

  async createRestaurants(values, callback) {
    try {
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

  async getRestaurantByName(restaurantName, callback) {
    try {
      const data = await User.find({ restaurantName: restaurantName });
      return callback(null, data);
    } catch (error) {
      return callback(error);
    }
  },

  async getRestaurantById(id, callback) {
    try {
      const data = await User.find({ _id: id });
      return callback(null, data);
    } catch (error) {
      return callback(error);
    }
  },

  async updateRestaurant(id, restaurantData, callback) {
    try {
      const updatedRecord = await Restaurant.updateOne({ id }).set(restaurantData);
      return callback(null, updatedRecord);
    }
    catch (error) {
      return callback(error);
    }
  },

  async deleteRestaurant(id, callback) {
    try {
      const data = await Restaurant.find({ _id: id });
      if (data) {
        Restaurant.deleteOne(data);
        return callback(null, 'deleted successfully!');
      }
      else {
        return callback('error while deleting', null);
      }
    } catch (error) {
      return callback(error);
    }
  }
};