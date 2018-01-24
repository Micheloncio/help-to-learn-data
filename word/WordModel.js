const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WordSchema = new Schema({
        english: String,
        spanish: String,
        type: String
})

module.exports = mongoose.model('Word', WordSchema)