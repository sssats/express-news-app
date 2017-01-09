var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    _id: {type: String, default: Date.now},
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {type: Date, default: Date.now}
});

module.exports = user;
