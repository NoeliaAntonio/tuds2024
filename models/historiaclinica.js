'use strict';
const { Types } = require('mysql2');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historiaclinica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historiaclinica.init({
    id_paciente:DataTypes.STRING,
    fecha: DataTypes.STRING,
    otromedico: DataTypes.STRING,
    
   
  }, {
    sequelize,
    modelName: 'historiaclinica',
  });
  return historiaclinica;
};