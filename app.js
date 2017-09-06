const express = require('express');
const app = express();
const router = express.Router();
const models = require('./server/models');

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
  // sequelize.sync().then(function(){
  models.User.create({name: 'Liz', email: 'person@example.com', password: 'password'}).then(user => {console.log('success')})
  models.property.create({name: 'M', location: 'somewhere', description: 'blah blah', price: 1}).then(property => {console.log('success')})
  // sequelize.sync({
  //   logging: console.log
  // }).then(function() {
  //   Property.create({
  //     name: "WedTest1",
  //     location: "123 Fake Street",
  //     description: "Test",
  //     price: 1
  //   });
  // })
  res.render('addproperty');
});

app.post('/addproperty', function (req, res) {
  res.redirect('propertylist');
});

module.exports = router;
