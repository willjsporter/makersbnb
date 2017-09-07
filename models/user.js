var mongoose = require('mongoose');
var Schema = mongoose.Schema
var propertySchema = require("./property").schema;

const UserSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   propertieslisted: [propertySchema],
   propertiesbooked: [propertySchema]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
