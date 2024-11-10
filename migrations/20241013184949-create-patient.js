'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fecha_de_ingreso: {
        type: Sequelize.DATE
      },
      celular: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.BOOLEAN
      },
      nacionalidad: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      localidad: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.INTEGER
      },
      estadocivil: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};