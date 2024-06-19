const { name } = require('ejs');
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
     moviename: String,
     year:Number,
     image: String,
     dsc: String
})

const movieDB = mongoose.model('movieTable', movieSchema);

module.exports = movieDB;