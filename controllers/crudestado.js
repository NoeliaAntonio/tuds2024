//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.saveestado = (req, res)=>{
    const descripcion = req.body.descripcion;
   
    conexion.query('INSERT INTO states SET ?',{descripcion:descripcion}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/estado');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updateestado = (req, res)=>{
    const id = req.body.id;
    const descripcion = req.body.descripcion;
   
    conexion.query('UPDATE states SET ? WHERE id = ?',[{descripcion:descripcion}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/estado');         
        }
});
};






