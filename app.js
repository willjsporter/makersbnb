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


app.post('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signupcomplete', function (req, res) {
  User(req.body).save(function(err,data){
    console.log(data);
    if (err) throw err;
  });
  res.redirect('/firstpage');
});


app.get('/addproperty', function (req, res) {
  var hands = null;
   if (typeof theUser !== 'undefined'){
     hands = theUser
   res.render('addproperty', {'hands': hands});
 } else {
      res.render('login-to-add')
    };
});

app.post('/addproperty', function (req, res) {
  // get data from view and add it to mongo db
  Property(req.body).save(function(err, data){
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
