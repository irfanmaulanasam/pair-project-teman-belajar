'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regions = sequelize.define('Regions', {
    Place: DataTypes.STRING
  }, {});
  Regions.associate = function(models) {
    // associations can be defined here
  };
  return Regions;
};