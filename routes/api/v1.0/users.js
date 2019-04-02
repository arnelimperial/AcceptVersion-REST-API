const rjwt = require('restify-jwt-community');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const restify = require('restify');
require('restify').plugins;
//const User = require('../../models/Users');
require('dotenv').config();
const registerController = require('../../../controllers/users');

module.exports = server => {
    server.post('/register', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: registerController.registerV1 }

      ]));
       
        

    
     

    

       
};