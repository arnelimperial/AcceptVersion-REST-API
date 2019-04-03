const rjwt = require('restify-jwt-community');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const restify = require('restify');
require('restify').plugins;
require('dotenv').config();
const registerController = require('../../../controllers/register');
const loginController = require('../../../controllers/login');

module.exports = server => {
    server.post('/register', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: registerController.registerV1 },
        { version: '2.0.0', handler: registerController.registerV2 },


      ]));

    server.post('/users/login', loginController.login);

    
       
        

    
     

    

       
};