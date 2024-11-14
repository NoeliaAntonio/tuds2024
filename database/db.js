const mysql = require('mysql');
const conexion = mysql.createConnection({
    host     : 'bsqxvsnannd5i2ltaogm-mysql.services.clever-cloud.com',
    user     : 'ufze4tdd3jkb0tyh',
    password : 'ZSboDzcJMX30hyyJkQgz',
    database : 'bsqxvsnannd5i2ltaogm'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;