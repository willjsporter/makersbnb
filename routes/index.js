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
  console.log(req.body)
  theUser = req.body.username
  res.render('firstpage-success', {data: req.body});
});

router.post('/signup', function (req, res) {
  res.render('signup');
});

router.post('/signupcomplete', function (req, res) {
  User(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  });
  res.redirect('/addproperty');
});

router.get('/addproperty', function (req, res) {
  res.render('addproperty');
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
