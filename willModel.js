var Sequelize = require('sequelize');
var connection = new Sequelize('makersbnb_test', 'will', null, {
  dialect: 'postgres'
});

var Property = connection.define('property', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    default: "TBC"
  },
  price: Sequelize.FLOAT
});
