const mysql = require('mysql');
const conexion = mysql.createConnection({
    host     : 'bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com',
    user     : 'udghsppxugc61kr8',
    password : 'hYZEjYfneSJPDLgSRuMb',
    database : 'bt8h3ry8eleq9vov8dlo'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;