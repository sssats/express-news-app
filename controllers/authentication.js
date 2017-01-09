var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userSchema = require('./../models/user');
var passwordHash = require('password-hash');
var SALT_WORK_FACTOR = 10;

var User = mongoose.model('User', userSchema);

function encryptPassword(password) {
  console.log(password)
  return passwordHash.generate(password);
}

router.get('/', function(req, res, next) {
  res.render('auth');
});

router.post('/login', function(req, res, next) {
  var data = req.body,
    isRightPassword,
    login;

  User.findOne({
    'login': data.login
  }, function(err, user) {
    if (err) {
      res.json({
        error: err
      });
    }
    if (user) {
      isRightPassword = passwordHash.verify(data.password, user.password);
      if (isRightPassword) {
        res.json({
          success: true,
          user: user.login
        });
      } else {
        res.json({
          error: 'Incorrect password'
        });
      }
    } else if (!user) {
      res.json({
        error: 'No user found'
      });
    }
  });
});

router.post('/register', function(req, res, next) {
  var data = req.body,
    password;
    console.log(data);

  User.findOne({
    'login': data.login
  }, function(err, user) {
    if (user) {
      res.json({
        error: 'This login is already in use'
      })
    } else {
      if (data.password1 === data.password2) {
        password = encryptPassword(data.password1);

        var user = new User({
          login: data.login,
          password: password
        });

        user.save(function(err, user, success) {
          if (err) {
            res.json({
              error: err
            });
          } else if (success === 1) {
            res.json({
              success: true,
              user: user
            });
          }
        });

      } else {
        res.json({
          error: 'Repeated password is not equal to password'
        })
      }
    }
  });
});

module.exports = router;
