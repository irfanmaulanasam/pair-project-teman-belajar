'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers',[{
    Nama:'aku',
    Alamat:'pasarraya',
    Telpon: 812345678,
    Email: 'a@b.c',
    Subjcet: 'matematika',
    createdAt: new Date(),
    updatedAt: new Date()
  }],{})
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
     return queryInterface.bulkDelete('Teachers', null, {});
  }
};
