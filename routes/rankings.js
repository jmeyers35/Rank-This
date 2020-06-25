var mongoose = require('mongoose');
var router = require('express').Router();
var Ranking = require('../models/Ranking');
var User = require('../models/User');

router.get("/rankings/:chartid", function(req, res) {
    Ranking.find({ chart: req.params.chartid }, function(err, rankings) {
        if (err) {
            return res.sendStatus(500);
        }
        if (!rankings) {
            return res.sendStatus(404);
        }
        return res.status(200).json(rankings);
    });
});

router.post("/rankings", function(req, res) {
    var ranking = new Ranking();
    ranking.user = req.user;
    ranking.chart = req.body.chart;
    ranking.ranking = req.body.ranking;

    ranking.save(function(err) {
        if (err) {
            return res.sendStatus(500);
        }
        return res.status(201).json(ranking.toJSON());
    })
});

module.exports = router;