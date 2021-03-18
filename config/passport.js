
const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt-nodejs');
// const Logger = require('services/Logger');
  
  //Serialize the user
passport.serializeUser(function(user, cb) {
  Logger.debug('passport.serializeUser', user)
  cb(null, user.id);
});
  
  //Deserialize the user
passport.deserializeUser(function(id, cb){
  Logger.debug('passport.deserializeUser', user)

  User.findOne({id}, function(err, user) {
    cb(err, user);
  });
});
  
  //Local -code1
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, cb){
  User.findOne({email: email}, function(err, user){
    Logger.debug('passport.use at User.getSingleUser');
    if(err){
      Logger.debug('User.getSingleUser', err)
      return cb(err);
    }
    if(!user)
      return cb(null, false, {message: 'Email not found'});
          
    bcrypt.compare(password, user.password, function(err, res){
      if(!res) 
        return cb(null, false, { message: 'Invalid Password' });
      return cb(null, user, { message: 'Login Succesful'});
    });
  });
}));



