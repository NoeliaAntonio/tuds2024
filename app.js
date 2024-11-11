// 1 - Invocamos a Express
const express = require('express');//referenciamos a express
const app = express();//lo invocamos
const {body, validationResult } = require('express-validator');
const sequelize = require('./database/db');
const User = require('./models/user');
const Paciente = require('./models/patient');
const Doctor = require('./models/doctor');
const Especialidad = require('./models/specialty');
const Estado = require('./models/state');
const Turno = require('./models/shift');
require ('./models/asosciaciones');
var render = require('render');




//2 - Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({extended:false}));
app.use(express.json());//además le decimos a express que vamos a usar json

//Establecemos las rutas para las VISTAS usando un archivo aparte (router.js) y la clase Router()
app.use('/', require('./routes/router'));


//3- Invocamos a dotenv
const dotenv = require('dotenv');

//4 -seteamos el directorio de assets
app.use('/resources',express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5 - Establecemos el motor de plantillas
app.use(express.json())
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))



//app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/", (req, res) => res.render('menu.ejs'));
//fin de la validacion del formulario de ejs

app.listen(900, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:900');
});


