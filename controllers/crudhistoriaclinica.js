//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savehistoriaclinica = (req, res)=>{
    const id_paciente = req.body.id_paciente;
    const fecha = req.body.fecha;
    const otromedico = req.body.otromedico;
   
    conexion.query('INSERT INTO historiaclinicas SET ?',{id_paciente:id_paciente,fecha:fecha,otromedico:otromedico}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexhistoriaclinica');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatehistoriaclinica = (req, res)=>{
    const id = req.body.id;
    const id_paciente= req.body.id_paciente;
    const fecha = req.body.fecha;
    const otromedico= req.body.otromedico;
    
    conexion.query('UPDATE historiaclinicas SET ? WHERE id = ?',[{id_paciente:id_paciente,fecha:fecha,otromedico:otromedico}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhistoriaclinica');         
        }
});
};