//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.savemedicine = (req, res)=>{
    const nombre = req.body.nombre;
    const fecha = req.body.fecha;
    const texto = req.body.texto;
    conexion.query('INSERT INTO medicines SET ?',{nombre:nombre, fecha:fecha, texto:texto}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexmedicine');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updatemedicine = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const fecha = req.body.fecha;
    const texto = req.body.texto;
    conexion.query('UPDATE medicines SET ? WHERE id = ?',[{nombre:nombre,fecha:fecha, texto:texto}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexmedicine');         
        }
});
};






