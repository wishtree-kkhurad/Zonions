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

  // '*': true, // Everything is unresctricted here
  // 'user':{
  //   register: true,
  //   login: true
  // },

  'UserController': {
    createUser: true
  },

  'AuthController':{
    login: true
  },

  'RestaurantController':{
    createRestaurants:true,
    updateRestaurant: true,
    deleteRestaurant: true
  },
  auth: {
    // '*': ['rateLimit'],
    '*': true,
  },
  user: {
    /*  '*': ['rateLimit', 'isAuthenticated'],
    registration: ['rateLimit'], */
    '*': ['isAuthenticated'],
    registration: true,
  },
};
