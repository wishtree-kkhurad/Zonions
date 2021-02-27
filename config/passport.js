// const passport = require('passport'),
// 	LocalStrategy = require('passport-local').Strategy,
//     bcrypt = require('bcrypt-nodejs');
    
//     //Serialize the user
// 	passport.serializeUser(function(user, cb) {
// 		cb(null, user.id);
//     });
    
//     //Deserialize the user
// 	passport.deserializeUser(function(id, cb){
// 		User.findOne({id}, function(err, user) {
// 			cb(err, user);
// 		});
//     });
    
//     //Local
// 	passport.use(new LocalStrategy({
// 			emailField: 'email',
// 			passwordField: 'password'
// 		}, function(email, password, cb){
// 		User.findOne({email: email}, function(err, user){
// 			Logger.debug('passport.use at User.findOne');
// 			if(err)
// 				return cb(err);
// 			if(!user)
// 				return cb(null, false, {message: 'Email not found'});
            
// 			bcrypt.compare(password, user.password, function(err, res){
// 				if(!res) 
// 					return cb(null, false, { message: 'Invalid Password' });
// 				return cb(null, user, { message: 'Login Succesful'});
// 			});
// 		});
// 	}));