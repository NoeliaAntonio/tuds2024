'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctors', {
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
      nacimiento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      sucursal: {
        type: Sequelize.STRING
      },
      biografia: {
        type: Sequelize.STRING
      },
      id_especialidad: {
        type: Sequelize.STRING
      },
      matricula: {
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
    await queryInterface.dropTable('Doctors');
  }
};