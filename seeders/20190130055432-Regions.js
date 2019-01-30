'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions',[{
      Place:'Jakarta Selatan'},{
    Pleace:'Jakarta Barat'
  },{
    Place:'Jakarta Pusat'
  },{
    Place:'Jakarta Timur'
  },{
    Place:'Jakarta Utara'
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
