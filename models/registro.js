'use strict';
const { Types } = require('mysql2');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registro.init({
    id_historiaclinica:DataTypes.INTEGER,
    alergia: DataTypes.STRING,
    importancia: DataTypes.STRING,
    alergiadesde: DataTypes.STRING,
    alergiahasta: DataTypes.STRING,
    habito: DataTypes.STRING,
    hdesde: DataTypes.STRING,
    hhasta: DataTypes.STRING,
    medicamento: DataTypes.STRING,
    mfecha: DataTypes.STRING,
    antecedente_patologico: DataTypes.STRING,
    adesde: DataTypes.STRING,
    hhasta: DataTypes.STRING,
    evolucion: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};