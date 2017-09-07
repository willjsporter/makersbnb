var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var mongoose = require('mongoose');
var user = require('./models/user');
var property = require('./models/property');

mongoose.connect('mongodb://localhost/makersbnb_test');
app.set('view engine', 'ejs');
app.set('views', './views');





const User = mongoose.model("user", UserSchema);
const Property = mongoose.model("property", PropertySchema);

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
  res.render('firstpage-success', {data: req.body});
});

app.post('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signupcomplete', function (req, res) {
  var newUser = User(req.body).save(function(err,data){
    if (err) throw err;
  });
  res.redirect('/addproperty');
});

app.get('/addproperty', function (req, res) {
  res.render('addproperty');
});

app.post('/addproperty', function (req, res) {
  // get data from view and add it to mongo db
  var newProperty = Property(req.body).save(function(err,data){
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
