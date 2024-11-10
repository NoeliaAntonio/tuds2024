'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('2Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_paciente: {
        type: Sequelize.INTEGER
      },
      id_doctor: {
        type: Sequelize.INTEGER
      },
      turno: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      motivo: {
        type: Sequelize.STRING
      },
      alergia: {
        type: Sequelize.STRING
      },
      importancia: {
        type: Sequelize.STRING
      },
      desde: {
        type: Sequelize.STRING
      },
      hasta: {
        type: Sequelize.STRING
      },
      diagnostico: {
        type: Sequelize.STRING
      },
      antecedentes: {
        type: Sequelize.STRING
      },
      adesde: {
        type: Sequelize.STRING
      },
      ahasta: {
        type: Sequelize.STRING
      },
      evolucion: {
        type: Sequelize.STRING
      },
      medicamento: {
        type: Sequelize.STRING
      },
      habito: {
        type: Sequelize.STRING
      },
      hdesde: {
        type: Sequelize.STRING
      },
      hhasta: {
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
    await queryInterface.dropTable('2Agendas');
  }
};