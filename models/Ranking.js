var mongoose = require('mongoose')

var rankingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    chart: { type: mongoose.Schema.Types.ObjectId, ref: 'Chart' },
    ranking: [{ itemName: String, scores: [{ criteriaName: String, weight: Number, score: Number }] }]
})

module.exports = mongoose.model('Ranking', rankingSchema)