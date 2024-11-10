//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO DE EVOLUCION
exports.saveevolution = (req, res)=>{
    
    const titulo = req.body.titulo;
    const resumen= req.body.resumen;
    
    conexion.query('INSERT INTO evolutions SET ?',{titulo:titulo,resumen:resumen}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexevolucion');//cada vez que inserta me redirige a la vista indexevolucion.ejs         
        }
});
};
//ACTUALIZAR un REGISTRO DE EVOLUCION
exports.updateevolution = (req, res)=>{
    const id = req.body.id;
    const titulo = req.body.titulo;
    const resumen = req.body.resumen;
    
    conexion.query('UPDATE evolutions SET ? WHERE id = ?',[{titulo:titulo,resumen:resumen}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexevolucion');         
        }
});
};






