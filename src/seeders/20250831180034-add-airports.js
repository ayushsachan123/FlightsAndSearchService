'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Indira Gandhi International Airport',
        address: 'New Delhi, Delhi 110037',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'International airport in Mumbai, Maharashtra',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajiv Gandhi International Airport',
        address: 'International airport in Hyderabad, Telangana',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Airports', null, {});
  }
};
