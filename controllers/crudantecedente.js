//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.saveantecedente = (req, res)=>{
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    const enfermedad = req.body.enfermedad;
    const respuesta = req.body.respuesta;
    conexion.query('INSERT INTO antecedentes SET ?',{desde:desde, hasta:hasta, enfermedad:enfermedad,respuesta:respuesta}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexantecedente');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updateantecedente = (req, res)=>{
    const id = req.body.id;
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    const enfermedad = req.body.enfermedad;
    const respuesta = req.body.respuesta;
    conexion.query('UPDATE antecedentes SET ? WHERE id = ?',[{desde:desde,hasta:hasta, enfermedad:enfermedad,respuesta:respuesta}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexantecedente');         
        }
});
};





