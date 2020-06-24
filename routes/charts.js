var mongoose = require('mongoose');
var router = require('express').Router();
var Chart = require('../models/Chart');
var User = require('../models/User');

router.get("/charts/", function(req, res) {
    Chart.find({}, function(err, charts) {
        if (err) {
            return res.sendStatus(500);
        }
        if (!charts) {
            return res.sendStatus(404);
        }
       return res.status(200).json(charts);
    });
});

router.get("/charts/:id", function(req, res) {
    Chart.findById(req.params.id, function(err, chart) {
        if (err) {
            return res.sendStatus(500);
        }
        if (!chart) {
            return res.sendStatus(404);
        }
        return res.status(200).json(chart.toJSON());
    })
});

router.post("/charts", function(req, res) {
    var chart = new Chart();
    chart.title = req.body.title;
    chart.description = req.body.description;
    chart.criteria = req.body.criteria;
    chart.items = req.body.items;
    chart.createdBy = req.user;
    chart.save(function(err) {
        if (err) {
            return res.sendStatus(500);
        }
        return res.status(201).json(chart.toJSON());
    });
    
});

module.exports = router;