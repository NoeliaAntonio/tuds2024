'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mucho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mucho.init({
    id_alergia: DataTypes.INTEGER,
    id_habito: DataTypes.INTEGER,
    id_medicamento: DataTypes.INTEGER,
    id_antecedente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mucho',
  });
  return mucho;
};