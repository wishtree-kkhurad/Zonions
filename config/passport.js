
const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt-nodejs');
  
  //Serialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
  
  //Deserialize the user
passport.deserializeUser(function(email, cb){
  User.findOne({email}, function(err, user) {
    cb(err, user);
  });
});
  
  //Local -code1
passport.use(new LocalStrategy({
    emailField: 'email',
    passwordField: 'password'
  }, function(email, password, cb){
  User.getSingleUser(email, function(err, user){
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



