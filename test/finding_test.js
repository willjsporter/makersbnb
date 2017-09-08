// const assert = require('assert');
// const Property = require('../models/property');
//
// describe('Updating property list', function(){
//   var property;
//   // Add a property to the db before each test
//   beforeEach(function(done){
//     property = new Property({
//       location: 'Commercial Street',
//       description: 'Grade 2 listed building',
//       price: 80
//     });
//     property.save().then(function(){
//       done();
//     });
//   });
//
//   it('Finds a record from the database', function(done){
//     Property.findOne({location: 'Commercial Street'}).then(function(result){
//       assert(result.name === 'Commercial Street');
//       done();
//     });
//   });
// });
