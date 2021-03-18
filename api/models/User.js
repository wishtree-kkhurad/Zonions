const bcrypt = require('bcrypt-nodejs');
const Logger = require('../services/Logger');

module.exports = {
	attributes: {
		userName: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true,
			unique:true
		},
		password: {
			type: 'string',
			required: true
		}
	},

	customToJSON: function () {
		return _.omit(this, ['password'])
	},

	// LIFE CYCLE
	beforeCreate: function (user, cb) {
		if (user.password) {
		  bcrypt.genSalt(10, function (err, salt) {
			  if(err)
			  console.log('in beforeCreate at bcrypt.genSalt', err)
			bcrypt.hash(user.password, salt, null, function (err, hash) {
			  if (err) {
				console.log(err);
				cb(err);
			  } else {
				user.password = hash;
				console.log("saving data" + user.password);
				cb();
			  }
			});
		  });
		}else{
		  cb();
		}
	},
	  
	async createUser(data, cb){
		Logger.debug('User.createUser');

		User.findOrCreate({email:data.email}, data)
		.exec(function(err, newOrExistingRecord, wasCreated) {
		  Logger.debug('User.findOrCreate at .exec');
		  if(err){
			Logger.error(`User.findOrCreate at .exec ${err}`);
			cb(err, null)
		  }
		  else {
			Logger.verbose(`newOrExistingRecord = ${JSON.stringify(newOrExistingRecord)}`);

			if(newOrExistingRecord && wasCreated===false){
				Logger.debug('User.findOrCreate at .exec: User already exists');
				cb('User already exists', null)
			}
			else if(newOrExistingRecord && wasCreated===true){
				Logger.info('New user registered successfully')
				cb(null, JSON.stringify(newOrExistingRecord))
			}
		  } 
		});
	},

	async getAllUsers(callback) {
		try {
			const data = await User.find();
			console.log('inside user model data found', data)
			return callback(null, data);
		} catch (error) {
			return callback(error);
		}
	},

	async getSingleUser(email, callback) {
		Logger.debug(`User.getSingleUser ${email}`)
		try {
			const data = await User.find({ email: email });
			console.log('inside user model data found', data.length)

			return callback(null, data);
		} catch (error) {
			return callback(error, null);
		}
	},

	async deleteUser(email, callback) {
		try {
			const data = await User.find({ email: email });
			if (data) {
				User.deleteOne(data);
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