'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regions = sequelize.define('Regions', {
    place: DataTypes.STRING
  }, {});
  Regions.associate = function(models) {
    // associations can be defined here
  };
  return Regions;
};