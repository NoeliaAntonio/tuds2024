const express = require('express');
const app = express();
const {body, validationResult } = require('express-validator');
const sequelize = require('./database/db');
const User = require('./models/user');


//Setting
const PORT = process.env.PORT|| 8000;

//Rutas
//app.get('/', function (req, res){
//res.send('hola mundo de Noelia');
//});

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))//capturamos los datos del formulario



//invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});


//el directorio publico
app.use('/resources', express.static('public'));//invocamos a todo los archivos de publci osea css
app.use('/resources',express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.render('index')
});







//validacion en el formulario de ejs...express validator

app.post('/registrar', [
    body('nya', 'Ingrese un nombre y apellido completo')
        .exists()
        .isLength({min:5}),//es el tamaño
    body('email', 'Ingrese un E-mail válido')
        .exists()
        .isEmail(),//valida un email
    body('edad', 'Ingrese un valor numérico')        
        .exists()
        .isNumeric()//valida un numero
], (req, res)=>{
    //Validación de la documentación oficial
    /* const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors)
    } */

    //validación propia    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {/**en caso de que ingrese un error te lo muestra como arreglo */
        console.log(req.body)//te muestra por consola los errores
        const valores = req.body
        const validaciones = errors.array()
        res.render('index', {validaciones:validaciones, valores: valores})/**render de la pagina pero mostrando estos valores */
    }else{
        res.send('¡Validación Exitosa!')
    }
})



//fin de la validacion del formulario de ejs






//arrancando el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: true }).then(() => {/** Esto crea la tabla, eliminándola primero si ya existía */
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});