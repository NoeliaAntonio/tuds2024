'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diagnosis.init({
    estado: DataTypes.STRING,
    diagnostico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diagnosis',
  });
  return Diagnosis;
};