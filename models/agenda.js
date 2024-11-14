'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
    agenda.init({
    descripcion: DataTypes.STRING,
    id_doctor: DataTypes.INTEGER,
    consulta:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'agenda',
  });
  return agenda;
};