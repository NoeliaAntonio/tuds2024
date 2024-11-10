'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historiaclinicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      alergia: {
        type: Sequelize.INTEGER
      },
      diagnostico: {
        type: Sequelize.INTEGER
      },
      antecedente: {
        type: Sequelize.INTEGER
      },
      evolucion: {
        type: Sequelize.INTEGER
      },
      habitos: {
        type: Sequelize.INTEGER
      },
      medicamentos: {
        type: Sequelize.INTEGER
      },
      motivo: {
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
    await queryInterface.dropTable('historiaclinicas');
  }
};