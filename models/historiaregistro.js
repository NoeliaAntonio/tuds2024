'use strict';
const { Types } = require('mysql2');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historiaregistro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historiaregistro.init({
    id_registro:DataTypes.INTEGER,
    id_historia: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'historiaregistro',
  });
  return historiaregistro;
};