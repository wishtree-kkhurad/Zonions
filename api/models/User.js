const bcrypt = require('bcrypt-nodejs');

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

	//create user
	async createUser(values, callback) {
		try {
		  const createdRecord = await User.create(values).fetch();
		  return callback(null, createdRecord);
		} catch (error) {
		  return callback(error);
		}
	  },
	async getUserList(callback) {
		try {
		  const data = await User.find({ isActive: true });
		  return callback(null, data);
		} catch (error) {
		  return callback(error);
		}
	},
};