var mongoose = require('mongoose');
var Schema = mongoose.Schema


const PropertySchema = mongoose.Schema({
   location: String,
   description: Text,
   price: Number
});

const Property = mongoose.model("property", PropertySchema);

module.exports = Property;
