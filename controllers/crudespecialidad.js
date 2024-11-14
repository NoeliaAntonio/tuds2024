//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO DE ESPECIALIDAD
exports.saveespecialidad = (req, res)=>{
    
    const especialidad = req.body.especialidad;
    const id_doctor= req.body.id_doctor;
    
    conexion.query('INSERT INTO specialtys SET ?',{especialidad:especialidad,id_doctor:id_doctor}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/especialidad');         
        }
});
};
//ACTUALIZAR un REGISTRO DE ESPECIALIDAD
exports.updateespecialidad = (req, res)=>{
    const id = req.body.id;
    const especialidad = req.body.especialidad;
    const id_doctor= req.body.id_doctor
    
    conexion.query('UPDATE specialtys SET ? WHERE id = ?',[{especialidad:especialidad}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/vermedicoespecialidad');         
        }
});
};






