var mongoose = require('mongoose');
var Schema = mongoose.Schema
var PropertySchema = require('./property')


const UserSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   properties: [PropertySchema]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
