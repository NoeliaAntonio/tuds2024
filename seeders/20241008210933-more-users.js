'use strict';
const faker = require('faker');//me llena con datos aleatorios

module.exports = {

   up: (queryInterface, Sequelize)=> {/**se ejecuta cuando hacemos la siembra */
    
    let users = [
     {name: faker.name.findName(),birthday:new Date(1996,9,6)},
     {name: faker.name.findName(),birthday:new Date(1996,9,7)},
     {name: faker.name.findName(),birthday:new Date(1996,9,8)},
  
    
    ];

    return queryInterface.bulkInsert('users',users, {});
    
  },

   down: (queryInterface, Sequelize) => {/**se ejecuta cuando se desace la siembra */
  
    return queryInterface.bulkInsert('users', null, {});
  }
};

