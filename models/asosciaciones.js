const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const Doctor = require ('../models/doctor');
const Especialidad = require ('../models/specialty');


//uno a muchos
//doctor va a tener muchas especialidades
//se añade una clave id_doctor a la tabla especialidad
//Doctor.hasMany(Especialidad,{as:"Especialidades", FOREIGNKEYS:"id_doctor"});


//añade una clave id_doctor a la tabla especialidad
//Especialidad.belongsTo(Doctor,{as:"doctor"});