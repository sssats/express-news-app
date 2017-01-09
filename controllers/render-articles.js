var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('./../models/article');


var Article = mongoose.model('Article', article);

function response(res, err, data) {
  if (err) {
    res.json({
      error: err
    });
  } else if (data) {
    res.json({
      success: true,
      articles: data
    });
  }
}

router.get('/', function (req, res, next) {
    Article.find(function (err, articles) {
      response(res, err, articles);
    });
});

router.get('/:id', function (req, res, next) {
    Article.findOne({'_id': req.params.id}, function (err, article) {
      response(res, err, article);
    });
});

router.get('/delete/:id', function (req, res, next) {
    Article.findOne({'_id': req.params.id}).remove(function (err, tank) {
      response(res, err, tank);
    });
});

module.exports = router;
