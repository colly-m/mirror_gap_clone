'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      profilepic: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      reviews: {
        type: Sequelize.STRING
      },
      isverified: {
        type: Sequelize.BOOLEAN
      },
      isApproved: {
        type: Sequelize.BOOLEAN
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      isOnline: {
        type: Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mentors');
  }
};