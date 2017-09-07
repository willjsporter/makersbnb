// //app.js in video
// var Sequelize = require('sequelize'); //creates sequelize constructor function
// var connection = new Sequelize('makersbnb_test', 'will', null, {  //represents a connection to the database
//   dialect: 'postgres'
// });

var Property = connection.define('property', { // define takes two arguments - the name of the model and an objects with the columns of the DB
  name: { //these hashes list some of the options that can be passed to properties of the attributes of the database.
    type: Sequelize.STRING, //this is of type string
    unique: true, //this means that other properties can't have the same name as this one - DB will reject if this is the case
    allowNull: false //this means this is a required field and can't be blank
  },
  location: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT, //text has no character limit unlike string
    default: "TBC" // default value of TBC if we didn't add anything for the description
  },
  price: Sequelize.FLOAT //this is alternative syntax available if you want
});
//
// connection.sync({ //creates a table if it doesn't already exist
// //force: true, //this forces the properties of the database as written above to be upheld.
//               // This would mean that if columns needed to be changed then the table (and all data) would be deleted upon this sync
// logging: console.log
// }).then(function(){ //ensures that the sync bit is done first before proceeding - ensures that there is a table to post data in.
// Property.create({
//   name: "Makers Academy",
//   location: "52-54 Commercial Street",
//   description: "A coding bootcamp for people that are just awful at coding - Kay Lovelace 2017",
//   price: 90
// })
// });
//
// _________
//
// var Sequelize = require('sequelize');
// var connection = new Sequelize('makersbnb_test', 'will', null, {  //represents a connection to the database
//   dialect: 'postgres'
// });
//
// var Prop = require('./sequelizeTutorial.js')
