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
dotenv.config({ path: './env/.env'});
//4 -seteamos el directorio de assets
app.use('/resources',express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5 - Establecemos el motor de plantillas
app.use(express.json())
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

//6 -Invocamos a bcrypt
const bcrypt = require('bcryptjs');
//7- variables de session
const session = require('express-session');
app.use(session({
	secret: 'secret',//nos pide una clave cualquiera
	resave: true,//almacenamiento 
	saveUninitialized: true//fuerzan a la sesion para guardarla
}));

//10 - Método para la REGISTRACIÓN
app.post('/register', async (req, res)=>{
	const user = req.body.user;
	const name = req.body.name;
    const rol = req.body.rol;
	const pass = req.body.pass;
	let passwordHash = await bcrypt.hash(pass, 8);
    connection.query('INSERT INTO users SET ?',{user:user, name:name, rol:rol, pass:passwordHash}, async (error, results)=>{
        if(error){
            console.log(error);
        }else{            
			res.render('register', {
				alert: true,
				alertTitle: "Registration",
				alertMessage: "¡Successful Registration!",
				alertIcon:'success',
				showConfirmButton: false,
				timer: 1500,
				ruta: ''
			});
            //res.redirect('/');         
        }
	});
})



//11 - Metodo para la autenticacion
app.post('/auth', async (req, res)=> {
	const user = req.body.user;
	const pass = req.body.pass;    
    let passwordHash = await bcrypt.hash(pass, 8);
	if (user && pass) {
		connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcrypt.compare(pass, results[0].pass)) ) {    
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "USUARIO y/o PASSWORD incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
				
				//Mensaje simple y poco vistoso
                //res.send('Incorrect Username and/or Password!');				
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});        			
			}			
			res.end();
		});
	} else {	
		res.send('Please enter user and Password!');
		res.end();
	}
});

//12 - Método para controlar que está auth en todas las páginas
//app.get('/', (req, res)=> {
/*	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'Debe iniciar sesión',			
		});				
	}
	res.end();
});*/


//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

 //Logout
//Destruye la sesión.
app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
	})
});





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


app.get("/", (req, res) => res.send("Express on Vercel"));
//fin de la validacion del formulario de ejs

app.listen(900, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:900');
});


