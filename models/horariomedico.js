'use strict';
const Datatype = require('faker/lib/datatype');
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
    id_doctor: Datatype.integer,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    detalle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'horariomedico',
  });
  return horariomedico;
};