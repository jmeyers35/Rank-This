var mongoose = require('mongoose')

var chartSchema = new mongoose.Schema({
    title: String,
    description: String,
    criteria: [{ name: String, weight: Number }],
    items: [String],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Ranking', chartSchema)