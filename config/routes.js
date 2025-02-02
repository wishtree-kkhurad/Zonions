/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },
  
  
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  /* Auth APIs*/
//  'post /api/login': 'AuthController.login',
//  'post /api/register': 'AuthController.register',
'POST /api/user/register': 'user/register',
'POST /api/user/login': 'user/login',

 'POST /api/user/logout': 'AuthController.logout',

 /* User APIs */
 'get /api/users/all': 'UserController.getAllUsers',
 'get /api/users/:email': 'UserController.getSingleUser',


 /* Restaurant APIs */
 'POST /restaurants': 'RestaurantController.createRestaurants',
 'PUT /restaurants/:id': 'RestaurantController.updateRestaurant',
 'DELETE /restaurants/:id': 'RestaurantController.deleteRestaurant',

 'GET /restaurants': 'RestaurantController.getAllRestaurants',
 'GET /restaurants/:id': 'RestaurantController.getRestaurantById',
 'GET /restaurants/byname/:name': 'RestaurantController.getRestaurantByName',
 'GET /restaurants/location/:address': 'RestaurantController.getRestaurantByLocation',


 /* File Upload */
 'post /file/upload': 'RestaurantController.uploadFile'

};
