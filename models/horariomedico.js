'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horariomedico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  horariomedico.init({
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'horariomedico',
  });
  return horariomedico;
};