const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
    }
);

module.exports = sequelize;

//con este me funcionaban las plantillas comunes