'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicine.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medicine',
  });
  return medicine;
};