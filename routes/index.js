var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');
var Property = require('../models/property');

mongoose.connect('mongodb://localhost/makersbnb_test');


router.get('/', function (req, res) {
  res.render('firstpage');
});

router.post('/', function (req, res) {
  User.findOne({username: req.body.username, password: req.body.password}, function (err, userexist){
   if (err) {
     console.log(err);
   };
   if (!userexist) {
     res.render('login-failure')
   } else {
     res.render('firstpage-success', {data: userexist})
     theUser = userexist
   };
});
});

router.post('/signup', function (req, res) {
  res.render('signup');
});

router.post('/signupcomplete', function (req, res) {
  User(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  });
  res.redirect('/');
});

router.get('/addproperty', function (req, res) {
  var hands = null;
  if (typeof theUser !== 'undefined'){
    hands = theUser
    res.render('addproperty', {'hands': hands});
  } else {
     res.render('login-to-add')
   };
});

router.post('/addproperty', function (req, res) {
  // get data from view and add it to mongo db
  Property(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  })
  res.redirect('/propertylist');
});

router.get('/propertylist', function (req, res) {
  Property.find({}, function(err, propAll){
    console.log(propAll);
    if (err) throw err;
  res.render('propertylist', {'propAll': propAll});
  });

});

module.exports = router;
