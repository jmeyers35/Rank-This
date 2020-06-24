var mongoose = require('mongoose')

var criteriaSchema = new mongoose.Schema({
    _id: false,
    name: String,
    weight: Number
});

var chartSchema = new mongoose.Schema({
    title: String,
    description: String,
    criteria: [criteriaSchema],
    items: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Ranking', chartSchema)