//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savehabit = (req, res)=>{
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    const nombre = req.body.nombre;
    conexion.query('INSERT INTO habits SET ?',{desde:desde, hasta:hasta, nombre:nombre}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexhabito');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatehabit = (req, res)=>{
    const id = req.body.id;
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    const nombre = req.body.nombre;
    conexion.query('UPDATE habits SET ? WHERE id = ?',[{desde:desde,hasta:hasta, nombre:nombre}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhabito');         
        }
});
};
