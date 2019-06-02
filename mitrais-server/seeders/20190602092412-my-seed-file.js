'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
      return queryInterface.bulkInsert('users', [{
        firstName: 'John',
        lastName: 'Doe',
        mobileNumber: '0892325332',
        email: 'john.doe@gmail.com',
        dob: '1988-04-12',
        gender: '1'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', {
    mobileNumber: '0892325332'
   });
  }
};
