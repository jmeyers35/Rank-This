var mongoose = require('mongoose')

var userRankingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    ranking: {type: mongoose.Schema.Types.ObjectId, ref: 'ranking'},
})