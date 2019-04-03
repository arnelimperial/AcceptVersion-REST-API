var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var User2 = mongoose.model('User2')
const config = require('../config');
require('dotenv/config');

exports.authenticate2 = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Get user by email
        const user = await User2.findOne({ email });
  
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
