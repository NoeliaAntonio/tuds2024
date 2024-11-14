const express = require('express');
const router = express.Router();

//Invocamos a la conexion de la DB
const conexion = require('../database/db');

//RUTA PARA MOSTRAR TODOS LOS REGISTROS DE USUARIOS
router.get('/index2cruduser', (req, res)=>{           
     conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('index2cruduser.ejs', {data:results});  //muestran los resultados de la informacion                                             
        }   
    })
})
//RUTA PARA MOSTRAR TODOS LOS REGISTROS DE PACIENTES
router.get('/paciente', (req, res)=>{           
    conexion.query('SELECT * FROM patients',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('pacientes.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS REGISTROS DE DOCTORES
router.get('/doctor', (req, res)=>{           
    conexion.query('SELECT * FROM doctors',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('doctor.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LAS ESPECIALIDADES
router.get('/especialidad', (req, res)=>{           
    conexion.query('SELECT * FROM specialtys',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('especialidad.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})

//RUTA PARA MOSTRAR TODOS LOS ESTADOS
router.get('/estado', (req, res)=>{           
    conexion.query('SELECT * FROM states',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('estado.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS turnos o shift
router.get('/indexshift', (req, res)=>{  //indexshift.ejs va a mostrar todos los turnos         
    conexion.query('SELECT * FROM shifts',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexshift.ejs', {data:results});  //me redirege a la vista                                            
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LAS AGENDAS
router.get('/indexagenda', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM agendas',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexagenda.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS MEDICAMENTOS
router.get('/indexmedicine', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM medicines',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexmedicine.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS DIAGNOSTICOS
router.get('/indexdiagnostico', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM diagnoses',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexdiagnostico.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS HABITOS
router.get('/indexhabito', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM habits',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexhabito.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS EVOLUCION
router.get('/indexevolucion', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM evolutions',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexevolucion.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS ANTECEDENTES
router.get('/indexantecedente', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM antecedentes',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexantecedente.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODAS LAS ALERGIAS en la vista de alergias
router.get('/indexalergia', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM alergias',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexalergia.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODAS LAS ALERGIAS en la vista de alergias
router.get('/indexhistoriaclinica', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM historiaclinicas',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexhistoriaclinica.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS DOCTORES
router.get('/verdoctores', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM doctors',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('verdoctores.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS las historias clinicas
router.get('/menuhistoriaclonica', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM historiaclinicas',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('menuhistoriaclinica.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS los registros
router.get('/indexregistro', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM registro',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexregistro.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS REGISTROS 
router.get('/verregistro', (req, res)=>{           
    conexion.query('SELECT * FROM registro',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('verregistro.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS Los turnos
router.get('/mostrarturnoconeliddelmedico', (req, res)=>{           
    conexion.query('SELECT p.nombre AS Nombre,p.apellido AS Apellido,a.consulta as Consulta,d.nombre as paciente,d.apellido as apellidop,s.secuencia as turno,s.fecha as fecha ,s.hora as hora,e.descripcion as estado from patients p INNER JOIN agendas a on(p.id=a.id_paciente) INNER JOIN doctors d on(d.id=a.id_doctor) INNER JOIN shifts s on(a.id_shift=s.id) INNER JOIN states e on(s.id=e.id)',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('mostrarturnoconeliddelmedico.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})
//RUTA PARA MOSTRAR TODOS LOS horario del medico
router.get('/indexhorariomedico', (req, res)=>{  //en la vista indexagenda.ejs va a mostrar todos los datos       
    conexion.query('SELECT * FROM horariomedicos',(error, results)=>{
       if(error){
           throw error;
       } else {                                                                
           res.render('indexhorariomedico.ejs', {data:results});  //muestran los resultados de la informacion                                             
       }   
   })
})


//------------------------------------------------------------------------------//----//



//ruta para enviar los datos en formato json
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de pacientes
router.get('/datapacientes', (req, res)=>{     
    conexion.query('SELECT * FROM patients',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datapacientes = JSON.stringify(results);
            res.send(datapacientes);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de doctor
router.get('/datadoctors', (req, res)=>{     
    conexion.query('SELECT * FROM doctors',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datadoctors = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datadoctors);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de especialidad
router.get('/dataespecialidad', (req, res)=>{     
    conexion.query('SELECT * FROM specialtys',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataespecialidad = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataespecialidad);          
        }   
    })
})
//este es un data que me trae el nombre del doctor y su especialidad
router.get('/datade', (req, res)=>{     
    conexion.query('SELECT d.id as id_doctor,d.nombre,d.apellido,e.id,e.especialidad FROM doctors d  join specialtys e on( d.id= e.id_doctor)'
,(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datade = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datade);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable estado
router.get('/dataestado', (req, res)=>{     
    conexion.query('SELECT * FROM states',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataestado = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataestado);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable turno o shift
router.get('/datashift', (req, res)=>{     
    conexion.query('SELECT t.id,t.id_agenda,t.id_paciente,p.nombre,p.apellido,t.secuencia,t.fecha,t.hora,t.id_estado,s.descripcion,t.motivo,a.id_doctor,d.nombre as nombred,d.apellido as apellidod FROM patients p INNER JOIN shifts t on (p.id=t.id_paciente) INNER JOIN states s on(t.id_estado=s.id)INNER JOIN agendas a on(a.id=t.id_agenda)INNER JOIN doctors d on(d.id=a.id_doctor);',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datashift = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datashift);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de agenda
router.get('/dataagendas', (req, res)=>{     
    conexion.query('SELECT a.id,a.descripcion,a.id_doctor,d.nombre as nombre,d.apellido as apellido,a.consulta FROM doctors d INNER JOIN agendas a on(d.id=a.id_doctor)',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataagendas = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataagendas);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de medicamentos
router.get('/datamedicine', (req, res)=>{     
    conexion.query('SELECT * FROM medicines',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datamedicine = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datamedicine);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de diagnostico
router.get('/datadiagnostico', (req, res)=>{     
    conexion.query('SELECT * FROM diagnoses',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datadiagnostico = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datadiagnostico);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de diagnostico
router.get('/datahabit', (req, res)=>{     
    conexion.query('SELECT * FROM habits',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datahabit = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datahabit);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de evolucion
router.get('/dataevolution', (req, res)=>{     
    conexion.query('SELECT * FROM evolutions',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataevolution = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataevolution);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de antecedente
router.get('/dataantecedente', (req, res)=>{     
    conexion.query('SELECT * FROM antecedentes',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataantecedente = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataantecedente);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de alergias
router.get('/dataalergia', (req, res)=>{     
    conexion.query('SELECT * FROM alergias',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            res.send(dataalergia);          
            dataalergia = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
        }   
    })
})

//ruta para enviar los datos en formato json al axaj del datatable de historiaclinica
router.get('/datahistoriaclinica', (req, res)=>{     
    conexion.query('SELECT h.id as id,h.id_paciente as id_paciente,p.nombre as nombre,p.apellido as apellido,h.fecha as fecha,h.otromedico as otromedico FROM historiaclinicas h INNER JOIN patients p on(p.id=h.id_paciente)',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datahistoriaclinica = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datahistoriaclinica);          
        }   
    })
})

//ruta para enviar los datos en formato json al axaj del datatable de agenda para endocrinologia 
router.get('/dataregistro', (req, res)=>{     
    conexion.query('SELECT r.id,r.id_historiaclinica,p.nombre,p.apellido,r.alergia,r.importancia,r.alergiadesde,r.alergiahasta,r.habito,r.hdesde,r.hhasta,r.medicamento,r.mfecha,r.antecedente_patologico,r.adesde,r.ahasta,r.evolucion,r.diagnostico,r.estado FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente)INNER JOIN registro r on (h.id=r.id_historiaclinica);',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataregistro = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataregistro);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de agenda para endocrinologia 
router.get('/datamenuhistoriaclinica', (req, res)=>{     
    conexion.query('select h.fecha,r.alergia,r.importancia,r.alergiadesde,r.alergiahasta,r.habito,r.medicamento,r.evolucion,r.diagnostico,r.estado from historiaclinicas h INNER JOIN patients p on(p.id=h.id_paciente) INNER JOIN historiaregistro g on (h.id=g.id_historia) INNER JOIN registro r on (r.id=g.id_registro)',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datamenuhistoriaclinica = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datamenuhistoriaclinica);          
        }   
    })
})
//ruta para enviar los datos en formato json a la vista mostrarturnoconeliddelmedico
router.get('/dataturno', (req, res)=>{     
    conexion.query('SELECT p.nombre AS Nombre,p.apellido AS Apellido,a.consulta as Consulta,d.nombre as paciente,d.apellido as apellidop,s.secuencia as turno,s.fecha as fecha ,s.hora as hora,e.descripcion as estado from patients p INNER JOIN agendas a on(p.id=a.id_paciente) INNER JOIN doctors d on(d.id=a.id_doctor) INNER JOIN shifts s on(a.id_shift=s.id) INNER JOIN states e on(s.id=e.id) WHERE a.id_doctor= 9 and a.id_paciente=1 and a.id_shift=1',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataturno = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataturno);          
        }   
    })
})

//ruta para enviar los datos en formato json al axaj del datatable de antecedente
router.get('/dataverAgenda', (req, res)=>{     
    conexion.query('SELECT p.nombre as Nombre,p.apellido as Apellido,a.descripcion,d.nombre as Dr ,d.apellido as Apellidod,a.consulta as Consulta,s.secuencia as Turno,s.fecha as fecha,s.hora as hora,e.descripcion as estado FROM patients p INNER JOIN agendas a on (p.id=a.id_paciente)INNER JOIN doctors d on(a.id_doctor=d.id)INNER JOIN shifts s on(a.id_shift=s.id)INNER JOIN states e on(s.id_estado=e.id)',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataverAgenda = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataverAgenda);          
        }   
    })
})
//ruta para ver todas las historias clinicas
router.get('/datahc', (req, res)=>{     
    conexion.query('SELECT p.nombre as Nombre,p.apellido as Apellido,h.fecha as Registrada,r.alergia,r.importancia,r.alergiadesde,r.alergiahasta,r.habito,r.hdesde,r.hhasta,r.medicamento,r.mfecha,r.antecedente_patologico,r.adesde,r.hhasta,r.evolucion,r.diagnostico,r.estado FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente) INNER JOIN historiaregistro g on(h.id=g.id_historia) INNER JOIN registro r on (g.id_registro=r.id);',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datahc = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datahc);          
        }   
    })
})

//ruta para enviar los datos en formato a la doctora con el id 9 martha medina
router.get('/datamartha', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=6;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datamartha = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datamartha);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.diego ostanelli con el id=10
router.get('/datadiego', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=7;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datadiego = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datadiego);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.diego ostanelli con el id=10
router.get('/dataverregistro', (req, res)=>{     
    conexion.query('SELECT h.id,p.nombre,p.apellido,h.fecha,r.alergia,r.habito,r.hdesde,r.hhasta,r.medicamento,r.mfecha,r.evolucion,r.antecedente_patologico,r.adesde,r.ahasta,r.diagnostico,r.estado  FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente) INNER JOIN registro r on(h.id=r.id_historiaclinica)WHERE p.id=1',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataverregistro = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataverregistro);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.sergio porporato con el id=15
router.get('/datasergio', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=5;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datasergio = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datasergio);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.sergio porporato con el id=15
router.get('/dataamadeopastorotu', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=9;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datasergio = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datasergio);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.sergio porporato con el id=15
router.get('/datafelipeabayay', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=8;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datafelipeabayay = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datafelipeabayay);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.sergio porporato con el id=15
router.get('/datarosaabdala', (req, res)=>{     
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id)WHERE a.id=10;',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datarosaabdala = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datarosaabdala);          
        }   
    })
})
//ruta para enviar los datos en formato al dr.sergio porporato con el id=15
router.get('/dataevolucion', (req, res)=>{     
    conexion.query('SELECT p.id as idp,p.nombre as Nombrep,p.apellido as Apellidop,r.evolucion as Evolucionp FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente)INNER JOIN historiaregistro g on(h.id=g.id_historia)INNER JOIN registro r on(g.id_registro=r.id);',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            dataevolucion = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(dataevolucion);          
        }   
    })
})
//ruta para enviar los datos en formato json al axaj del datatable de diagnostico
router.get('/datahorariomedico', (req, res)=>{     
    conexion.query('SELECT h.id,h.id_doctor,d.nombre,d.apellido,h.fecha,h.hora,h.detalle FROM horariomedicos h INNER JOIN doctors d on(d.id=h.id_doctor);',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            datahorariomedico = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(datahorariomedico);          
        }   
    })
})


//------------------------------------------------------------------------
//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO
router.get('/create', (req,res)=>{
    res.render('create2cruduser');
})

//RUTA para contacto
router.get('/contacto', (req,res)=>{
    res.render('contacto');
})
//RUTA para login
router.get('/login', (req,res)=>{
    res.render('login');
})
//RUTA para pacientes
router.get('/pacientes', (req,res)=>{
    res.render('pacientes');
})
//RUTA para doctor
router.get('/doctor', (req,res)=>{
    res.render('doctor');
})
//RUTA para crear doctor
router.get('/creardoctor', (req,res)=>{
    res.render('creardoctor');
})
//RUTA para editar doctor
router.get('/editardoctor', (req,res)=>{
    res.render('editardoctor.ejs');
})
//RUTA para especialidad
router.get('/especialidad', (req,res)=>{//le doy el nombre de la vista
    res.render('especialidad');
})
//RUTA para crear una especialidad
router.get('/crearespecialidad', (req,res)=>{
    res.render('crearespecialidad');
})
//RUTA para editar una especialidad
router.get('/editarespecialidad', (req,res)=>{
    res.render('editarespecialidad.ejs');
})
//RUTA para agenda
router.get('/indexagenda', (req,res)=>{
    res.render('indexagenda');
})
//RUTA para crear una agenda
router.get('/crearagenda', (req,res)=>{
    res.render('crearagenda');
})
//RUTA para editar una agenda
router.get('/editaragenda', (req,res)=>{
    res.render('editaragenda.ejs');
})
//RUTA para index1
router.get('/index1', (req,res)=>{
    res.render('index1');
})

//RUTA para crear paciente
router.get('/crearpaciente', (req,res)=>{
    res.render('crearpaciente');
})
//RUTA para editar paciente
router.get('/editarpaciente', (req,res)=>{
    res.render('editarpaciente.ejs');
})
//RUTA para ver doctor y su especialidad
router.get('/vermedicoespecialidad', (req,res)=>{
    res.render('vermedicoespecialidad.ejs');
})
//RUTA para estado
router.get('/estado', (req,res)=>{
    res.render('estado.ejs');
})
//RUTA para crear estado
router.get('/crearestado', (req,res)=>{
    res.render('crearestado');
})
//RUTA para editar estado
router.get('/editarestado', (req,res)=>{
    res.render('editarestado.ejs');
})
//RUTA para shift
router.get('/indexshift', (req,res)=>{
    res.render('indexshift.ejs');
})
//RUTA para crear shift
router.get('/crearshift', (req,res)=>{
    res.render('crearshift');
})
//RUTA para editar shift
router.get('/editarshift', (req,res)=>{
    res.render('editarshift.ejs');
})
//RUTA para medicamentos
router.get('/indexmedicine', (req,res)=>{
    res.render('indexmedicine.ejs');
})
//RUTA para crear medicamentos
router.get('/crearmedicine', (req,res)=>{
    res.render('crearmedicine');
})
//RUTA para editar medicamentos
router.get('/editarmedicine', (req,res)=>{
    res.render('editarmedicine.ejs');
})
//RUTA para diagnostico
router.get('/indexdiagnostico', (req,res)=>{
    res.render('indexdiagnostico.ejs');
})
//RUTA para crear diagnostico
router.get('/creardiagnostico', (req,res)=>{
    res.render('creardiagnostico');
})
//RUTA para editar diagnostico
router.get('/editardiagnostico', (req,res)=>{
    res.render('editardiagnostico.ejs');
})
//RUTA para habito
router.get('/indexhabito', (req,res)=>{
    res.render('indexhabito.ejs');
})
//RUTA para crear habito
router.get('/crearhabito', (req,res)=>{
    res.render('crearhabito');
})
//RUTA para editar habito
router.get('/editarhabito', (req,res)=>{
    res.render('editarhabito.ejs');
})
//RUTA para evolucion
router.get('/indexevolucion', (req,res)=>{
    res.render('indexevolucion.ejs');
})
//RUTA para crear evolucion
router.get('/crearevolucion', (req,res)=>{
    res.render('crearevolucion');
})
//RUTA para editar evolucion
router.get('/editarevolucion', (req,res)=>{
    res.render('editarevolucion.ejs');
})
//RUTA para antecedente
router.get('/indexantecedente', (req,res)=>{
    res.render('indexantecedente.ejs');
})
//RUTA para crear antecedente
router.get('/crearantecedente', (req,res)=>{
    res.render('crearantecedente');
})
//RUTA para editar antecedente
router.get('/editarantecedente', (req,res)=>{
    res.render('editarantecedente.ejs');
})
//RUTA para alergia
router.get('/indexalergia', (req,res)=>{
    res.render('indexalergia.ejs');
})
//RUTA para crear alergia
router.get('/crearalergia', (req,res)=>{
    res.render('crearalergia');
})
//RUTA para editar alergia
router.get('/editaralergia', (req,res)=>{
    res.render('editaralergia.ejs');
})
//RUTA para historiaclinica
router.get('/indexhistoriaclinica', (req,res)=>{
    res.render('indexhistoriaclinica.ejs');
})
//RUTA para crear historiaclinica
router.get('/crearhistoriaclinica', (req,res)=>{
    res.render('crearhistoriaclinica');
})
//RUTA para editar historiaclinica
router.get('/editarhistoriaclinica', (req,res)=>{
    res.render('editarhistoriaclinica.ejs');
})


//RUTA para agendadeldia del medico
router.get('/agendadeldia', (req,res)=>{
    res.render('agendadeldia.ejs');
})
//RUTA para agendadeldia del medico
router.get('/agendadelmedico', (req,res)=>{
    res.render('agendadelmedico.ejs');
})
//RUTA para crear agenda del medico
router.get('/crearagendadelmedico', (req,res)=>{
    res.render('crearagendadelmedico.ejs');
})
//RUTA para crear agenda el menu
router.get('/menu', (req,res)=>{
    res.render('menu.ejs');
})
//RUTA para crear agenda el menu
router.get('/verdoctores', (req,res)=>{
    res.render('verdoctores.ejs');
})
//RUTA para crear agenda el menu
router.get('/mostrardoctorseleccionado', (req,res)=>{
    res.render('mostrardoctorseleccionado.ejs');
})

//RUTA para crear paciente el menupaciente
router.get('/menupacientes', (req,res)=>{
    res.render('menupacientes.ejs');
})
//RUTA para crear la historia clinica
router.get('/menuhistoriaclinica', (req,res)=>{
    res.render('menuhistoriaclinica.ejs');
})
//RUTA para registro
router.get('/indexcrearregistro', (req,res)=>{
    res.render('indexcrearregistro.ejs');
})
//RUTA para crear historiaclinica
router.get('/crearregistro', (req,res)=>{
    res.render('crearregistro');
})
//RUTA para editar historiaclinica
router.get('/editarregistro', (req,res)=>{
    res.render('editarregistro.ejs');
})
//RUTA para registro
router.get('/indexregistro', (req,res)=>{
    res.render('indexregistro.ejs');
})
//RUTA para ver registro
router.get('/verregistro', (req,res)=>{
    res.render('verregistro.ejs');
})
//RUTA para ver registro
router.get('/mostrarturnoconeliddelmedico', (req,res)=>{
    res.render('mostrarturnoconeliddelmedico.ejs');
})
//RUTA para ver 
router.get('/verAgenda', (req,res)=>{
    res.render('verAgenda.ejs');
})
//RUTA para ver 
router.get('/todaslashc', (req,res)=>{
    res.render('todaslashc.ejs');
})
//RUTA para ver 
router.get('/seleccionardoctor', (req,res)=>{
    res.render('seleccionardoctor.ejs');
})
//RUTA para ver 
router.get('/agendademartha', (req,res)=>{
    res.render('agendademartha.ejs');
})
//RUTA para ver 
router.get('/agendadediego', (req,res)=>{
    res.render('agendadediego.ejs');
})
//RUTA para ver 
router.get('/agendadesergio', (req,res)=>{
    res.render('agendadesergio.ejs');
})
//RUTA para ver 
router.get('/cargarevolucion', (req,res)=>{
    res.render('cargarevolucion.ejs');
})
//RUTA para ver 
router.get('/cargarevolucion1', (req,res)=>{
    res.render('cargarevolucion1.ejs');
})
//RUTA para ver 
router.get('/agendademadeopastorotu', (req,res)=>{
    res.render('agendademadeopastorotu.ejs');
})
//RUTA para ver 
router.get('/agendadefelipeabayay', (req,res)=>{
    res.render('agendadefelipeabayay.ejs');
})
//RUTA para ver 
router.get('/agendaderosaabdala', (req,res)=>{
    res.render('agendaderosaabdala.ejs');
})
//RUTA para ver 
router.get('/indexhorariomedico', (req,res)=>{
    res.render('indexhorariomedico.ejs');
})
//RUTA para ver 
router.get('/crearhorariomedico', (req,res)=>{
    res.render('crearhorariomedico.ejs');
})
//RUTA para ver 
router.get('/editarhorariomedico', (req,res)=>{
    res.render('editarhorariomedico.ejs');
})


//-----------------------------------------------------


//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE LA TABLA USUARIOS
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit2cruduser.ejs', {user:results[0]});            
        }        
    });
});

//RUTA PARA EDITAR UN REGISTRO SELECCIONADO de paciente
router.get('/editarpaciente/:id', (req,res)=>{    //este viene de la vista pacientes.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM patients WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarpaciente.ejs', {patient:results[0]});  //patient va a estar en la vista como variable que trae los datos          
            
        }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO de doctores
router.get('/editardoctor/:id', (req,res)=>{    //este viene de la vista pacientes.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM doctors WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editardoctor.ejs', {doctor:results[0]});  //doctor es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE ESPECIALIDAD
router.get('/editarespecialidad/:id', (req,res)=>{    //este viene de la vista pacientes.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM specialtys WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarespecialidad.ejs', {especialidad:results[0]});  //doctor es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE shift o turno
router.get('/editarshift/:id', (req,res)=>{ //le digo que en la vista editarshift.ejs muestre el dato seleccionado
    const id = req.params.id;
    conexion.query('SELECT * FROM shifts WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarshift.ejs', {shift:results[0]});  //shif es la variable que necesita el ajax para mostrar los datos        
            }                             /*shift lo uso cuando edito la vista editarshift.ejs */      
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE ESTADO
router.get('/editarestado/:id', (req,res)=>{    //este viene de la vista pacientes.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM states WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarestado.ejs', {estado:results[0]});  //estado es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE AGENDA
router.get('/editaragenda/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM agendas WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editaragenda.ejs', {agenda:results[0]});  //agenda es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE MEDICAMENTOS
router.get('/editarmedicine/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM medicines WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarmedicine.ejs', {medicine:results[0]});  //agenda es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE DIAGNOSTICO
router.get('/editardiagnostico/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM diagnoses WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editardiagnostico.ejs', {diagnostico:results[0]});  //agenda es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE HABITOS
router.get('/editarhabito/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM habits WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarhabito.ejs', {habit:results[0]});  //agenda es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE EVOLUCION
router.get('/editarevolucion/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM evolutions WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarevolucion.ejs', {evolucion:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE ANTECEDENTE
router.get('/editarantecedente/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM antecedentes WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarantecedente.ejs', {antecedente:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE ALERGIA
router.get('/editaralergia/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM alergias WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editaralergia.ejs', {alergia:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO DE historiaclinica
router.get('/editarhistoriaclinica/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM historiaclinicas WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarhistoriaclinica.ejs', {historiaclinica:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO SELECCIONADO menupacientes que va a munuhistoriaclinica
router.get('/menuhistoriaclinica/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT p.nombre as Nombre,p.apellido as Apellido,h.fecha as Fecha,r.alergia as Registro,r.habito as Habito,r.medicamento as Remedio,r.evolucion as Evolucion,r.diagnostico as Diagnostico,r.estado as Estado FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente) INNER JOIN historiaregistro g on(h.id=g.id_historia )INNER JOIN registro r on(g.id_registro=r.id) WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            menuhistoriaclinica = JSON.stringify(results);//es donde guarda un objeto doctor datadoctors
            res.send(menuhistoriaclinica); //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});



//RUTA PARA EDITAR UN doctor SELECCIONAdo
router.get('/doctorseleccionado/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM doctors WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('mostrardoctorseleccionado.ejs', {doctorseleccionado:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO 
router.get('/editarregistro/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM registro WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarregistro.ejs', {registro:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA EDITAR UN REGISTRO 
router.get('/verregistro/:id_paciente', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id_paciente = req.params.id_paciente;
    conexion.query('SELECT p.nombre as Nombre,p.apellido as Apellido,h.fecha as Fecha,r.alergia as Registro,r.habito as Habito,r.hdesde,r.hhasta,r.medicamento as Remedio,r.mfecha,r.evolucion as Evolucion,r.antecedente_patologico,r.adesde,r.ahasta,r.diagnostico as Diagnostico,r.estado as Estado FROM patients p INNER JOIN historiaclinicas h on (p.id=h.id_paciente) INNER JOIN registro r on(h.id=r.id_historiaclinica)WHERE p.id=?',[id_paciente] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('verregistro.ejs', {registro:results[0]});  //evolucion lo uso en editarevolucion.ejs        
            }        
    });
});
//RUTA PARA MOSTRAR TODOS LOS TURNOS CON ESE DOCTOR DANDOLE COMO PARAMETRO EL ID_DOCTOR,id_paciente,id_shift
router.get('/mostraragenda/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    
    conexion.query('SELECT a.id,d.nombre,d.apellido,a.descripcion,a.consulta,s.id_paciente,p.nombre as nomprep,p.apellido as apellidop,s.secuencia,s.fecha,s.hora,s.id_estado,e.descripcion as estado,s.motivo FROM doctors d INNER JOIN agendas a on (d.id=a.id_doctor) INNER JOIN shifts s on(a.id=s.id_agenda) INNER JOIN patients p on (p.id=s.id_paciente)INNER JOIN states e on (s.id_estado=e.id) WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('mostraragenda.ejs', {mostraragenda:results[0]});  //patient va a estar en la vista como variable que trae los datos          
            
        }        
    });
});

//RUTA PARA EDITAR UN horario medico
router.get('/editarhorariomedico/:id', (req,res)=>{    //este viene de la vista editaragenda.ejs
    const id = req.params.id;
    conexion.query('SELECT * FROM horariomedicos WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editarhorariomedico.ejs', {horariomedico:results[0]});  //agenda es la variable que necesita el ajax para mostrar los datos        
            }        
    });
});



//---------------------------------------------///---------------------------------------------

//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE USERS
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE PERSONA
router.get('/deletepatient/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM patients WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/pacientes');         
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE doctor
router.get('/deletedoctor/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM doctors WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/doctor');         
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE Especialidad
router.get('/deleteespecialidad/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM specialtys WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/especialidad');         
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE AGENDA
router.get('/deleteshift/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM shifts WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexshift');         
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ESTADO
router.get('/deleteestado/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM states WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/estado'); //me redirige a estado.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE AGENDA
router.get('/deleteagenda/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM agendas WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexagenda'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE MEDICAMENTO
router.get('/deletemedicine/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM medicines WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexmedicine'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE DIAGNOSTICO
router.get('/deletediagnostico/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM diagnoses WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexdiagnostico'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE HABITO
router.get('/deletehabit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM habits WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhabito'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE EVOLUCION
router.get('/deleteevolucion/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM evolutions WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexevolucion'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ANTECEDENTE
router.get('/deleteantecedente/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM antecedentes WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexantecedente'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ALERGIA
router.get('/deletealergia/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM alergias WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexalergia'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE historiaclinica
router.get('/deletehistoriaclinica/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM historiaclinicas WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhistoriaclinica'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ver doctores
router.get('/deleteverdoctores/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM doctors WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/verdoctores'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE historia clinica
router.get('/verhc/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM patients WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/historiaclinica'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ALERGIA
router.get('/deletealergia/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM registro WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexregistro'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO DE ALERGIA
router.get('/deletehorariomedico/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM horariomedicos WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/indexhorariomedico'); //me redirige a indexagenda.ejs de la vista        
        }
    })
});




//Invocamos los metodos para el CRUD
const crud = require('../controllers/crud');
const crudpacientes = require('../controllers/crudpacientes');
const cruddoctor = require('../controllers/cruddoctor');
const crudespecialidad = require('../controllers/crudespecialidad');
const crudshift = require('../controllers/crudshift');
const crudestado = require('../controllers/crudestado');
const crudagenda = require('../controllers/crudagenda');
const crudmedicine = require('../controllers/crudmedicine');
const cruddiagnostico = require('../controllers/cruddiagnostico');
const crudhabit = require('../controllers/crudhabit');
const crudevolution = require('../controllers/crudevolution');
const crudantecedente = require('../controllers/crudantecedente');
const crudalergia = require('../controllers/crudalergia');
const crudhistoriaclinica = require('../controllers/crudhistoriaclinica');
const crudregistro = require('../controllers/crudregistro');
const crudhorariomedico = require('../controllers/crudhorariomedico');
const { json } = require('express');
const habit = require('../models/habit');

// usamos router.post porque en el formulario el method="POST"
router.post('/save', crud.save);//le doy la direccion de el crud de guarda en controller crud.ej
router.post('/update', crud.update);

router.post('/savepaciente' , crudpacientes.savepaciente);
router.post('/updatepaciente', crudpacientes.updatepaciente);

router.post('/savedoctor' , cruddoctor.savedoctor);
router.post('/updatedoctor', cruddoctor.updatedoctor);


router.post('/saveespecialidad' ,crudespecialidad.saveespecialidad);
router.post('/updateespecialidad' ,crudespecialidad.updateespecialidad);

router.post('/saveshift' ,crudshift.saveshift);
router.post('/updateshift' ,crudshift.updateshift);

router.post('/saveestado' ,crudestado.saveestado);
router.post('/updateestado' ,crudestado.updateestado);

router.post('/saveagenda' ,crudagenda.saveagenda);
router.post('/updateagenda' ,crudagenda.updateagenda);

router.post('/savemedicine' ,crudmedicine.savemedicine);
router.post('/updatemedicine' ,crudmedicine.updatemedicine);

router.post('/savediagnosis' ,cruddiagnostico.savediagnosis);
router.post('/updatediagnosis' ,cruddiagnostico.updatediagnosis);

router.post('/savehabit' ,crudhabit.savehabit);
router.post('/updatehabit' ,crudhabit.updatehabit);

router.post('/saveevolution' ,crudevolution.saveevolution);
router.post('/updateevolution' ,crudevolution.updateevolution);

router.post('/saveantecedente' ,crudantecedente.saveantecedente);
router.post('/updateantecedente' ,crudantecedente.updateantecedente);

router.post('/savealergia' ,crudalergia.savealergia);
router.post('/updatealergia' ,crudalergia.updatealergia);

router.post('/savehistoriaclinica' ,crudhistoriaclinica.savehistoriaclinica);
router.post('/updatehistoriaclinica' ,crudhistoriaclinica.updatehistoriaclinica);

router.post('/saveregistro' ,crudregistro.saveregistro);
router.post('/updateregistro' ,crudregistro.updateregistro);

router.post('/savehorariomedico' ,crudhorariomedico.savehorariomedico);
router.post('/updatehorariomedico' ,crudhorariomedico.updatehorariomedico);



module.exports = router;