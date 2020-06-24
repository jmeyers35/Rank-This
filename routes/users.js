var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = require('../models/User');

router.get('/users', function(req, res) {
    if (!req.body.id && !req.body.username) {
        res.sendStatus(400);
    }

    if (req.body.id) {
        User.findById(req.body.id, function(err, user) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!user) {
                return res.sendStatus(404);
            }
            return res.json(user.toGetJSON());
        });
    }

    if (req.body.username) {
        User.findOne({username: req.body.username}, function(err, user) {
            if (err) {
                return res.sendStatus(500);
            }
            if (!user) {
               return res.sendStatus(404);
            }
           return res.json(user.toGetJSON());
        });
    }
});

router.post('/users', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if (err) {
            return res.sendStatus(500);
        } else {
           return res.status(201).json(user.toGetJSON());
        }
    });
});

router.post('/users/login', passport.authenticate('local'), function(req, res) {
    res.status(200).json(req.user);
});

module.exports = router;