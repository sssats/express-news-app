var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('./../models/article');


var Article = mongoose.model('Article', article);

router.get('/list', function(req, res, next) {
  console.log('here');
  res.render('articles')
});

router.post('/create', function(req, res, next) {
  var data = req.body;
  var dateHash = Date.now();
  console.log(req.boyd);
  console.log('---------');
  console.log(req.files);

  if (req.files.image.name.length > 0) {
    req.files.image.mv('./public/images/' + dateHash + '_' + req.files.image.name, function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        var article = new Article({
          title: data.title,
          body: data.body,
          picture: req.files.image.name.length > 0 ? dateHash + '_' + req.files.image.name : '',
        });

        article.save();
        res.redirect('/articles');
      }
    });
  }


});

module.exports = router;
