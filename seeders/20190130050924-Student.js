'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',[{
      Nama: 'kami',
      Alamat: 'kebayoran',
      Telpon: 81234567,
      Email: 'a@blur.c',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    Nama: 'kami',
    Alamat: 'kebayoran',
    Telpon: 81234567,
    Email: 'a@blur.c',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    Nama: 'kami',
    Alamat: 'kebayoran',
    Telpon: 81234567,
    Email: 'a@blur.c',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ],{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Students', null, {});
  }
};
