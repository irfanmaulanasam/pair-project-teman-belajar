'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    Nama: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Telpon: DataTypes.INTEGER,
    Email: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    models.belongsTo('Regions')
  };
  return Student;
};