//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const especialidad = req.body.especialidad;
    const  fecha= req.body.fecha;
    const  hora= req.body.hora;
    const  estado= req.body.estado;
    const  turno= req.body.turno;
    const  NombreP= req.body.NombreP;
    const  Apellidop= req.body.Apellidop;
    const  motivo= req.body.motivo;
    
    conexion.query('INSERT INTO doctors SET ?',{nombre:nombre,apellido:apellido}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/agendadelmedico');         
        }
});
conexion.query('INSERT INTO specialtys SET ?',{especialidad:especialidad}, (error, results)=>{
    if(error){
        console.log(error);
    }else{
        //console.log(results);   
        res.redirect('/agendadelmedico');         
    }
});
conexion.query('INSERT INTO shifts SET ?',{fecha:fecha,hora:hora,motivo:motivo}, (error, results)=>{
    if(error){
        console.log(error);
    }else{
        //console.log(results);   
        res.redirect('/agendadelmedico');         
    }
});
conexion.query('INSERT INTO states SET ?',{estado:estado}, (error, results)=>{
    if(error){
        console.log(error);
    }else{
        //console.log(results);   
        res.redirect('/agendadelmedico');         
    }
});
conexion.query('INSERT INTO patients SET ?',{NombreP:NombreP,Apellidop,Apellidop}, (error, results)=>{
    if(error){
        console.log(error);
    }else{
        //console.log(results);   
        res.redirect('/agendadelmedico');         
    }
});

};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user,name:name, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};