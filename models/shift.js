'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shift.init({
   secuencia: DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    //id_estado: {type :DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    id_estado: DataTypes.INTEGER,
    motivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shift',
  });
  return Shift;
};

// id_agenda:{type :DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
   // id_paciente: {type :DataTypes.INTEGER,primaryKey: true,autoIncrement: true},