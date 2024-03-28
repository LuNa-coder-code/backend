const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    date: String,
    location: String,
    description: String
});

module.exports = mongoose.model('BoxeventModel', schema);