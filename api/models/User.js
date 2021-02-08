const bcrypt = require('bcrypt-nodejs');
const Logger = require('../services/Logger');

	module.exports = {
	attributes: {
		username: {
		  type: 'string',
		  required: true
		},
		email: {
		  type: 'string',
		  required: true
		},
		password: {
		  type: 'string',
		  required: true
    },
    description: {
		  type: 'string',
		}
  },
  
	customToJSON: function() {
		return _.omit(this, ['password'])
  },
  
  beforeCreate: function(user, cb){
		bcrypt.genSalt(10, function(err, salt){
		  bcrypt.hash(user.password, salt, null, function(err, hash){
			if(err) return cb(err);
			user.password = hash;
			return cb();
		  });
		});
	},

	async getAllUsers(callback) {
		try {
		  const data = await User.find({});
		  return callback(null, data);
		} catch (error) {
		  return callback(error);
		}
	},

	async getSingleUser(email, callback) {
		try {
		  const data = await User.find({ email: email });
		  return callback(null, data);
		} catch (error) {
		  return callback(error);
		}
	},
	
	async deleteUser(email, callback) {
		try {
		  const data = await User.find({ email: email });
		  if(data){
			User.deleteOne(data);
			return callback(null, 'deleted successfully!');
		  }
		  else{
			return callback('error while deleting', null);
		  }
		} catch (error) {
		  return callback(error);
		}
	}
};