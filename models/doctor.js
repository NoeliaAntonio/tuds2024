'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    genero: DataTypes.STRING,
    direccion: DataTypes.STRING,
    celular: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    sucursal: DataTypes.STRING,
    biografia: DataTypes.STRING,
    matricula: DataTypes.STRING,
    dni : DataTypes.int
    
  }, {
    sequelize,
    modelName: 'Doctor',
    timestamps:false   //con esto en falso desaparecent los update en la base de datos
  });
  return Doctor;
};