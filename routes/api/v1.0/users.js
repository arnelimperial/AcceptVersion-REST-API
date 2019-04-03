const rjwt = require('restify-jwt-community');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const restify = require('restify');
require('restify').plugins;
require('dotenv').config();
const registerController = require('../../../controllers/register');
const loginController = require('../../../controllers/login');
const loginController2 = require('../../../controllers/login2');

const loginUsersController = require('../../../controllers/loginUsers');
const delUsersController = require('../../../controllers/delUser');
const updateUsersController = require('../../../controllers/updateUser');


module.exports = server => {
    server.post('/register', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: registerController.registerV1 },
        { version: '2.0.0', handler: registerController.registerV2 },


      ]));


      server.get('/users', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: loginUsersController.allUsers1},
        { version: '2.0.0', handler: loginUsersController.allUsers2},
  
  
      ]));

    

    server.post('/users/login', restify.plugins.conditionalHandler([
      { version: '1.0.0', handler: loginController.login},
      { version: '2.0.0', handler: loginController2.login},


    ]));

    server.get('/users/:username', restify.plugins.conditionalHandler([
      { version: '1.0.0', handler: loginUsersController.userByName1 },
      { version: '2.0.0', handler: loginUsersController.userByName2 },


    ]));

    server.put('/users/:id', rjwt({ secret: process.env.JWT_SECRET }), restify.plugins.conditionalHandler([
      { version: '1.0.0', handler: updateUsersController.updateUser1 },
      { version: '2.0.0', handler: updateUsersController.updateUser2 },


    ]));

    server.del('/users/:id',rjwt({ secret: process.env.JWT_SECRET }), restify.plugins.conditionalHandler([
      { version: '1.0.0', handler: delUsersController.deleteUser1 },
      { version: '2.0.0', handler: delUsersController.deleteUser2 },


    ]));





   


    
       
        

    
     

    

       
};