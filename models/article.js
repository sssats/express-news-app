var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema({
    _id: {type: String, default: Date.now},
    title: {
        type: String,
        required: true
    },
    picture: String,
    body: {
        type: String,
        required: true
    },
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now}
});

module.exports = article;
