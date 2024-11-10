'use strict';


module.exports = {

   up: (queryInterface, Sequelize)=> {/**se ejecuta cuando hacemos la siembra */
    
    let users = [
    {name:"Anton",birthday:new Date(1996,9,6)},
    
    ];

    return queryInterface.bulkInsert('users',users, {});
    
  },

   down: (queryInterface, Sequelize) => {/**se ejecuta cuando se desace la siembra */
  
    return queryInterface.bulkInsert('users', null, {});
  }
};
