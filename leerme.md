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