'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.addColumn('Teachers', 'Regions',Sequelize.INTEGER);
    },
    
    down: (queryInterface, Sequelize) => {
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.dropTable('users');
      */
     return queryInterface.removeColumn('Teachers', 'Regions');
  }
};
