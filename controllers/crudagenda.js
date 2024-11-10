//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.saveagenda = (req, res)=>{
    const descripcion = req.body.descripcion;
    const id_doctor = req.body.id_doctor;
    const id_paciente = req.body.id_paciente;
    const id_shift = req.body.id_shift;
    const consulta = req.body.consulta;
   
   
    conexion.query('INSERT INTO agendas SET ?',{descripcion:descripcion,id_doctor:id_doctor,id_paciente:id_paciente,id_shift:id_shift,consulta:consulta}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexagenda');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updateagenda = (req, res)=>{
    const id = req.body.id;
    const descripcion = req.body.descripcion;
    const id_doctor = req.body.id_doctor;
    const id_paciente = req.body.id_paciente;
    const id_shift = req.body.id_shift;
    const consulta = req.body.consulta;
   
    conexion.query('UPDATE agendas SET ? WHERE id = ?',[{descripcion:descripcion,id_doctor:id_doctor,id_paciente:id_paciente,id_shift:id_shift,consulta:consulta}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexagenda');         
        }
});
};




//ACTUALIZAR un REGISTRO
exports.doctorfecha = (req, res)=>{
    const id = req.body.id;
    const id_doctor = req.body.id_doctor;
    const  fecha= req.body.fecha;
    conexion.query('UPDATE agendas SET ? WHERE id = ?',[{id_doctor:id_doctor,fecha:fecha}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/mostrardoctorfecha');         
        }
});
};






