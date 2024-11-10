'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class antecedente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  antecedente.init({
    desde: DataTypes.STRING,
    hasta: DataTypes.STRING,
    enfermedad: DataTypes.STRING,
    respuesta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'antecedente',
  });
  return antecedente;
};