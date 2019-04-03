var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var User1 = require('../models/Register')
const rjwt = require('restify-jwt-community');
const config = require('../config');
exports.authenticate = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Get user by email
        const user = await User1.findOne({ email });
  
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch){
            resolve(user);
          }else{
            reject('Authentication Failed!');
          }
        
        });
      
      }catch(err){
        reject('Authentication Failed!');
      }
    });
  
  }
