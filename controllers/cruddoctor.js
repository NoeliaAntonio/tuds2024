//Invocamos a la conexion de la DB
const conexion = require('../database/db');
const Doctor = require ('../models/doctor');
const Especialidad = require ('../models/specialty');


//guardamos un registro de doctores
exports.savedoctor = (req,res)=>{
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const nacimiento = req.body.nacimiento;
  const genero = req.body.genero;
  const direccion = req.body.direccion;
  const celular = req.body.celular;
  const imagen = req.body.imagen;
  const sucursal = req.body.sucursal;
  const biografia = req.body.biografia;
  const matricula = req.body.matricula;
  const dni = req.body.dni;
  conexion.query('INSERT INTO doctors SET ?' ,{nombre:nombre,apellido:apellido,email:email,nacimiento:nacimiento,genero:genero,direccion:direccion,celular:celular,imagen:imagen,sucursal:sucursal,biografia:biografia,matricula:matricula,dni:dni},(error, results)=>{

      if(error){
        console.log(error);
      }else{
        res.redirect('/doctor');
      }

});
};



//ACTUALIZAR un REGISTRO de pacientes
exports.updatedoctor = (req, res)=>{
const id = req.body.id;
const nombre = req.body.nombre;
const apellido = req.body.apellido;
const email = req.body.email;
const nacimiento = req.body.nacimiento;
const genero = req.body.genero;
const direccion = req.body.direccion;
const celular = req.body.celular;
const imagen = req.body.imagen;
const sucursal = req.body.sucursal;
const biografia = req.body.biografia;
const matricula = req.body.matricula;
const dni = req.body.dni;
    conexion.query('UPDATE doctors SET ? WHERE id = ?',[{nombre:nombre,apellido:apellido,email:email,nacimiento:nacimiento,genero:genero,direccion:direccion,celular:celular,imagen:imagen,sucursal:sucursal,biografia:biografia,matricula:matricula,dni:dni}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/doctor');         
        }
});
};





  








//--------------------------------------------
/*router.get('/',(req,res)=>{
  Doctor.findAll({
              include:{
                 model:specialty,
                 as:"especialidad",
                 attributes:['street']
  },
  attributes:['nombre']
  }).then(doctors=>res.json(doctors));      
  });*/