var mongoose = require('mongoose')

var rankingSchema = new mongoose.Schema({
    title: String,
    description: String,
    criteria: [{ name: String, weight: Number }],
    items: [String]
})