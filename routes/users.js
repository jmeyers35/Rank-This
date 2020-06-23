var mongoose = require('mongoose');
var router = require('express').Router();
var User = require('../models/User');

router.get('/users/test', function(req, res) {
    res.send('/users works!');
});

router.post('/users', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if (err) {
            res.send('problem creating user!');
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;