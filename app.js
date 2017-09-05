const express = require('express')
const app = express()

app.listen(3000, function () {
  console.log('Makersbnb app listening on port 3000!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/propertylist', function (req, res) {
  res.send('Property List')
})
