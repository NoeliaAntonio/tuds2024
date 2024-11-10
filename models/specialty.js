'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // define association here
    }
  }
  Specialty.init({
    especialidad: DataTypes.STRING,
    id_doctor:{type :DataTypes.INTEGER,primaryKey: true,autoIncrement: true}
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};