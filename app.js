var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var mongoose = require('mongoose');
const User = require('./models/user');
const Property = require('./models/property');

mongoose.connect('mongodb://localhost/makersbnb_test');
app.set('view engine', 'ejs');
app.set('views', './views');

// const PropertySchema = mongoose.Schema({
//    location: String,
//    description: String,
//    price: Number
// });
//
// const UserSchema = mongoose.Schema({
//    username: String,
//    email: String,
//    password: String,
//    properties: [PropertySchema]
// });
//
// const User = mongoose.model("user", UserSchema);
// const Property = mongoose.model("property", PropertySchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded
// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));



app.get('/firstpage', function (req, res) {
  res.render('firstpage');
});

app.post('/firstpage', function (req, res) {
  console.log(req.body)
  theUser = req.body.username
  res.render('firstpage-success', {data: req.body});
});

app.post('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signupcomplete', function (req, res) {
  User(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  });
  res.redirect('/addproperty');
});

 //willstuff
app.get('/blahblah', function (req, res) {
  User.findOne({username:theUser},function(err, userdeets){
  console.log(userdeets);
  if (err) throw err;
  res.render('blahblah', {'userdeets': userdeets});
});
});
//end of willstuff

app.get('/addproperty', function (req, res) {

  res.render('addproperty');
});

app.post('/addproperty', function (req, res) {
  // get data from view and add it to mongo db
  Property(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  })
  res.redirect('/propertylist');
});

app.get('/propertylist', function (req, res) {
  Property.find({}, function(err, propAll){
    console.log(propAll);
    if (err) throw err;
  res.render('propertylist', {'propAll': propAll});
  });

});

app.listen(3000, function () {
  console.log('Makersbnb app listening on port 3000!');
});
