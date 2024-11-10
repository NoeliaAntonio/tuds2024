//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO DE AGENDA
exports.saveshift = (req, res)=>{

    const secuencia= req.body.secuencia;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const id_estado = req.body.id_estado;
    const motivo = req.body.motivo;
    
    conexion.query('INSERT INTO shifts SET ?',{secuencia:secuencia,fecha:fecha,hora:hora,id_estado:id_estado,motivo:motivo}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexshift');         
        }
});
};
//ACTUALIZAR un REGISTRO DE turno o shift
exports.updateshift = (req, res)=>{
    const id = req.body.id;
    const secuencia= req.body.secuencia;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const id_estado = req.body.id_estado;
    const motivo = req.body.motivo;
    
    conexion.query('UPDATE shifts SET ? WHERE id = ?',[{secuencia:secuencia,fecha:fecha,hora:hora,id_estado:id_estado,motivo:motivo}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexshift');         
        }
});
};






