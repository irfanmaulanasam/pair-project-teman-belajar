'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        type: Sequelize.STRING
      },
      Alamat: {
        type: Sequelize.STRING
      },
      Telpon: {
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING
      },
      Subjcet: {
        type: Sequelize.STRING
      },
      profesi: {
        type: Sequelize.STRING
      },
      jadwal: {
        type: Sequelize.STRING
      },
      wilayah: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teachers');
  }
};