// const mongoose = require ('mongoose');
//
// //Connect to db before tests run
// before(function(done){
//
//   mongoose.connect('mongodb://localhost/makersbnb_test');
//   mongoose.connection.once('open', function(){
//     console.log('Connection has been made');
//     done();
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });
// });
//
// // Drop the property collection before each test
// beforeEach(function(done){
//     mongoose.connection.collections.properties.drop(function(){
//         done();
//     });
// });
