const passport = require("passport")
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
  }
  
  
  //JWT authentication
  passport.use(new JWTStrategy(opts, function (jwtPayLoad, done) {
  
    Doctor.findById(jwtPayLoad._id).then( function ( user) {
     if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
      })
  
  }));
  
  module.exports = passport;