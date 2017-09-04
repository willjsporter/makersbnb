'use strict';
module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define('Property', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {
    classMethods: {
      associate: function(models) {
        Property.belongsTo(model.User);
      }
    }
  });
  return Property;
};
