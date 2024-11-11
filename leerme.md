dependencias usadas:
npm init
npm install express//instala node modules
npm install --save sequelize
npm install --mysql2


npm run start   //levanta el servidor
npm install --save-dev nodemon
npm install -g sequelize-cli
sequelize init  //crea todas las carpetas
npm install express-validator
npm i ejs
npm i dotenv
npm i express-sesions
npm i bcrypt



para crear modelos en la terminal escribir:

sequelize model:create --name User --attributes name:string,birthday:date



Ejecutar migraciones:

Sequelize db:migrate  //esto te crea la tabla en la base de datos

para sembrar la base de datos con seeder:
npx sequelize-cli seed:generate --name create-users//te crea una siembra de datos en la carpeta seeders

para cargar datos a la misma tabla de users escribo en la terminal:
npx sequelize-cli seed:generate --name more-users


para mandar los datos a la base de datos en la terminal escribir:
npx sequelize-cli db:seed:all    //con esto ejecutamos todas las migraciones

Para crear datos aleatorios escribir en la terminal:
npm i faker


-----------------------------------------------------------------------------
Enunciado del Trabajo Práctico Integrador.

El proyecto puede realizarse individual o de a 2 integrantes. En caso de que al comienzo sean 2 integrantes y luego se separen no pueden ser reemplazados los integrantes.

El proyecto se defiende al final de la cursada o en mesa de examen para aprobar la materia.

Para regularizar la materia se deberá tener en funcionamiento (al final de la cursada):

Pantalla para consultar la agenda del día del médico.
Poder selecciona un paciente y consultar su historia clínica
Poder cargar la evolución de un paciente.
Estas funcionabilidades deberán estar subidas a un servidor (en internet).

Si el tiempo lo permite cabe la posibilidad que estas funciones tengan que ser presentadas en clase (la última semana)
------------------------------------------------------------------------------
base de datos subida al servidor https://console.clever-cloud.com/
Host:bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com
Database Name:bt8h3ry8eleq9vov8dlo
User:udghsppxugc61kr8
Password:hYZEjYfneSJPDLgSRuMb
🔐
Port:3306
Connection URI
mysql://udghsppxugc61kr8:hYZEjYfneSJPDLgSRuMb@bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com:3306/bt8h3ry8eleq9vov8dlo
🔐
MySQL CLI
mysql -h bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com -P 3306 -u udghsppxugc61kr8 -p bt8h3ry8eleq9vov8dlo
Reset Database
Click this button to reset your database. Every table will be deleted. Your backups will remain untouched.
-----------------------------------------------------------------------------------------------------
MYSQL_ADDON_HOST=bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com
MYSQL_ADDON_DB=bt8h3ry8eleq9vov8dlo
MYSQL_ADDON_USER=udghsppxugc61kr8
MYSQL_ADDON_PORT=3306
MYSQL_ADDON_PASSWORD=hYZEjYfneSJPDLgSRuMb
MYSQL_ADDON_URI=mysql://udghsppxugc61kr8:hYZEjYfneSJPDLgSRuMb@bt8h3ry8eleq9vov8dlo-mysql.services.clever-cloud.com:3306/bt8h3ry8eleq9vov8dlo
---------------------------------------------------------------------------------------------
