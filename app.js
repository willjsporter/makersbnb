var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var mongoose = require('mongoose');

// Mongoose

mongoose.connect('mongodb://localhost/makersbnb_test');

app.set('view engine', 'ejs');
app.set('views', './views');

const PropertySchema = mongoose.Schema({
   location: String,
   description: String,
   price: Number
});

const UserSchema = mongoose.Schema({
   name: String,
   password: Number,
   properties: [PropertySchema]
});

const User = mongoose.model("user", UserSchema);
const Property = mongoose.model("property", PropertySchema);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});


app.get('/firstpage', function (req, res) {
  res.render('firstpage');
});

app.post('/firstpage', function (req, res) {
  console.log(req.body)
  res.render('firstpage-success', {data: req.body});
  // res.render('addproperty', {data: req.body});
});

app.post('/signup', function (req, res) {
  res.render('signup');
});

app.get('/addproperty', function (req, res) {
  res.render('addproperty');
});

//will's stuff
app.post('/addproperty', function (req, res) {
  // get data from view and add it to mongo db
  var newProperty = Property(req.body).save(function(err,data){
    if (err) throw err;
  })
  res.redirect('/propertylist');
});
//end of will

//commented out by will

// app.post('/propertylist', function (req, res) {
//   // get data from view and add it to mongo db
//   var newProperty = Property(req.body).save(function(err,data){
//     if (err) throw err;
//     res.render('propertylist', {data: req.body});
//     // res.json(data);
//   })
//   // res.render('propertylist', {data: req.body});
// });

//end of will remove

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
