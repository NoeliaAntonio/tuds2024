//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savediagnosis = (req, res)=>{
    const estado = req.body.estado;
    const diagnostico = req.body.diagnostico;
    
    conexion.query('INSERT INTO diagnoses SET ?',{estado:estado, diagnostico:diagnostico}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexdiagnostico');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatediagnosis = (req, res)=>{
    const id = req.body.id;
    const estado = req.body.estado;
    const diagnostico = req.body.diagnostico;
    conexion.query('UPDATE diagnoses SET ? WHERE id = ?',[{estado:estado,diagnostico:diagnostico}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexdiagnostico');         
        }
});
};






