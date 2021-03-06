var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/User');

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(function(username, password, done) {
    console.log(`login attempt with username ${username} and password ${password}`);
    User.findOne({ username: username }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        user.comparePassword(password, function(err, isMatch) {
            if (err)  {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user);
        });
    });
}));