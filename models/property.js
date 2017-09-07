var mongoose = require('mongoose');
var Schema = mongoose.Schema


const PropertySchema = mongoose.Schema({
   location: String,
   description: String,
   price: Number
});

module.exports = mongoose.model("Property", PropertySchema);
