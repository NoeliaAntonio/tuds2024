'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evolution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  evolution.init({
    titulo: DataTypes.STRING,
    resumen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'evolution',
  });
  return evolution;
};