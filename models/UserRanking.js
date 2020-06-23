var mongoose = require('mongoose')

var userRankingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    chart: {type: mongoose.Schema.Types.ObjectId, ref: 'Chart'},
    
})

module.exports = mongoose.model('UserRanking', userRankingSchema)