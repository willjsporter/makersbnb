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
   desciption: String,
   price: Number
});

const UserSchema = mongoose.Schema({
   name: String,
   password: Number,
   properties: [PropertySchema]
});

const User = mongoose.model("user", UserSchema);
const Property = mongoose.model("property", PropertySchema);

//
//  Mongoose end
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
                saveUnitialized: true,
                resave: true}));





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

// app.get('/propertylist', function (req, res) {
//   res.render('propertylist');
// });

app.get('/addproperty', function (req, res) {
  res.render('addproperty');
});

app.post('/propertylist', function (req, res) {
  // get data from view and add it to mongo db
  var newProperty = Property(req.body).save(function(err,data){
    if (err) throw err;
    res.render('propertylist', {data: req.body});
    // res.json(data);
  })
  // res.render('propertylist', {data: req.body});
});


app.get('/propertylist', function (req, res) {
  Todo.find({}), function(err, data){

  }
  res.render('propertylist');
});

app.listen(3000, function () {
  console.log('Makersbnb app listening on port 3000!');
});
