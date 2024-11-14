//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savehorariomedico = (req, res)=>{
    const id_doctor = req.body.id_doctor;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const detalle = req.body.detalle;
    conexion.query('INSERT INTO horariomedicos SET ?',{id_doctor:id_doctor, fecha:fecha, hora:hora,detalle:detalle}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexhorariomedico');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatehorariomedico = (req, res)=>{
    const id = req.body.id;
    const id_doctor = req.body.id_doctor;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const detalle = req.body.detalle;
    conexion.query('UPDATE horariomedicos SET ? WHERE id = ?',[{id_doctor:id_doctor,fecha:fecha, hora:hora,detalle}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhorariomedico');         
        }
});
};