/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  // '*': 'authenticated',

  // whitelist the auth controller
  // 'auth': {
  //   '*': true
  // }
 
  // '*': true,

  '*': true, // Everything is unresctricted here
  'user':{
    register: true,
    login: true
  },

  'RestaurantController':{
    // getAllRestaurants: true,
    // getRestaurantById: true,
    // getRestaurantByName: true,
    // getRestaurantByLocation: true,
    createRestaurants:true,
    updateRestaurant: true,
    deleteRestaurant: true
  }
};
