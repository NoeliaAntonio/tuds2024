//Invocamos a la conexion de la DB
const conexion = require('../database/db');


//guarda y actualizar estan en save y update
//GUARDAR un REGISTRO
exports.saveregistro = (req, res)=>{
    const id_historiaclinica = req.body.id_historiaclinica;
    const alergia = req.body.alergia;
    const importancia = req.body.importancia;
    const alergiadesde = req.body.alergiadesde;
    const alergiahasta = req.body.alergiahasta;
    const habito = req.body.habito;
    const hdesde = req.body.hdesde;
    const hhasta = req.body.hhasta;
    const medicamento = req.body.medicamento;
    const mfecha = req.body.mfecha;
    const antecedente_patologico = req.body.antecedente_patologico;
    const adesde = req.body.adesde;
    const ahasta = req.body.ahasta;
    const evolucion = req.body.evolucion;
    const diagnostico = req.body.diagnostico;
    const estado = req.body.estado;

    conexion.query('INSERT INTO registro SET ?',{id_historiaclinica:id_historiaclinica, alergia:alergia, importancia:importancia,alergiadesde:alergiadesde,alergiahasta:alergiahasta,habito:habito,hdesde:hdesde,hhasta:hhasta,medicamento:medicamento,mfecha:mfecha,antecedente_patologico:antecedente_patologico,adesde:adesde,ahasta:ahasta,evolucion:evolucion,diagnostico:diagnostico,estado:estado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/indexregistro');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.updateregistro = (req, res)=>{
    const id = req.body.id;
    const id_historiaclinica = req.body.id_historiaclinica;
    const alergia = req.body.alergia;
    const importancia = req.body.importancia;
    const alergiadesde = req.body.alergiadesde;
    const alergiahasta = req.body.alergiahasta;
    const habito = req.body.habito;
    const hdesde = req.body.hdesde;
    const hhasta = req.body.hhasta;
    const medicamento = req.body.medicamento;
    const mfecha = req.body.mfecha;
    const antecedente_patologico = req.body.antecedente_patologico;
    const adesde = req.body.adesde;
    const ahasta = req.body.ahasta;
    const evolucion = req.body.evolucion;
    const diagnostico = req.body.diagnostico;
    const estado = req.body.estado;
    conexion.query('UPDATE registro SET ? WHERE id = ?',[{id_historiaclinica:id_historiaclinica, alergia:alergia, importancia:importancia,alergiadesde:alergiadesde,alergiahasta:alergiahasta,habito:habito,hdesde:hdesde,hhasta:hhasta,medicamento:medicamento,mfecha:mfecha,antecedente_patologico:antecedente_patologico,adesde:adesde,ahasta:ahasta,evolucion:evolucion,diagnostico:diagnostico,estado:estado}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexregistro');         
        }
});
};