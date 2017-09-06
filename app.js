var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'ejs');



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


// app.get('/', function (req, res) {
//   res.send('firstpage');
// });

app.get('/firstpage', function (req, res) {
  res.render('firstpage');
});

app.post('/firstpage', function (req, res) {
  console.log(req.body)
  res.render('firstpage-success', {data: req.body});
  // res.render('addproperty', {data: req.body});
});

app.get('/propertylist', function (req, res) {
  res.render('propertylist');
});

app.get('/addproperty', function (req, res) {
  res.render('addproperty');
});

app.post('/addproperty', function (req, res) {
  res.redirect('propertylist');
});

app.listen(3000, function () {
  console.log('Makersbnb app listening on port 3000!');
});
