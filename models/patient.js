'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_de_ingreso: DataTypes.DATE,
    celular: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    localidad: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    estadocivil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};