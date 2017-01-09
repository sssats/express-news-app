var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds133358.mlab.com:33358/heroku_dnhmsn7r', function () {
   console.log("i'm connected")
});