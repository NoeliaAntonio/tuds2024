//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guardamos un registro de pacientes
exports.savepaciente = (req,res)=>{
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const fecha_de_ingreso = req.body.fecha_de_ingreso;
  const celular= req.body.celular;
  const genero = req.body.genero;
  const nacionalidad = req.body.nacionalidad;
  const provincia = req.body.provincia;
  const localidad = req.body.localidad;
  const dni = req.body.dni;
  const estadocivil = req.body.estadocivil;
  conexion.query('INSERT INTO patients SET ?' ,{nombre:nombre,apellido:apellido,email:email,fecha_de_ingreso:fecha_de_ingreso,celular:celular,genero:genero,nacionalidad:nacionalidad,provincia:provincia,localidad:localidad,dni:dni,estadocivil:estadocivil},(error, results)=>{

      if(error){
        console.log(error);
      }else{
        res.redirect('/pacientes');
      }

});
};



//ACTUALIZAR un REGISTRO de pacientes
exports.updatepaciente = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const fecha_de_ingreso=req.body.fecha_de_ingreso;
    const celular = req.body.celular;
    const genero = req.body.genero;
    const nacionalidad = req.body.nacionalidad;
    const provincia = req.body.provincia;
    const localidad = req.body.localidad;
    const dni = req.body.dni;
    const estadocivil = req.body.estadocivil;
    conexion.query('UPDATE patients SET ? WHERE id = ?',[{nombre:nombre,apellido:apellido, email:email,fecha_de_ingreso:fecha_de_ingreso,celular:celular,genero:genero,nacionalidad:nacionalidad,provincia:provincia,localidad:localidad,dni:dni,estadocivil:estadocivil}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/pacientes');         
        }
});
};