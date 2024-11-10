//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savealergia = (req, res)=>{
    const nombre = req.body.nombre;
    const importancia = req.body.importancia;
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    conexion.query('INSERT INTO alergias SET ?',{nombre:nombre, importancia:importancia, desde:desde,hasta:hasta}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexalergia');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatealergia = (req, res)=>{
    const id = req.body.id;
    const nombre= req.body.nombre;
    const importancia = req.body.importancia;
    const desde = req.body.desde;
    const hasta = req.body.hasta;
    conexion.query('UPDATE alergias SET ? WHERE id = ?',[{nombre:nombre,importancia:importancia, desde:desde,hasta:hasta}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexalergia');         
        }
});
};

