'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions',[{
      place:'Jakarta Selatan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    place:'Jakarta Barat',
    createdAt: new Date(),
    updatedAt: new Date()

  },{
    place:'Jakarta Pusat',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    place:'Jakarta Timur',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    place:'Jakarta Utara',
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
     return queryInterface.bulkDelete('Regions', null, {});
  }
};
