'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    Nama: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Telpon: DataTypes.INTEGER,
    Email: DataTypes.STRING,
    Subjcet: DataTypes.STRING,
    profesi: DataTypes.STRING,
    jadwal: DataTypes.STRING,
    wilayah: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};