const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log('Makersbnb app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('firstpage');
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
