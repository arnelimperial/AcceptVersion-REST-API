const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const User1 = require('../models/Register');
const User2 = require('../models/Register2');
const auth = require('../middleware/auth');
const config = require('../config');
require('dotenv').config();


 //Update user by ID
  //V1

exports.updateUser1= async(req, res, next)=>{
    if(!req.is('application/json')){
        return next(new errors.InvalidContentError("Expects 'application/json'"));
    }
    
    try{
        var user = await User1.findOneAndUpdate({_id: req.params.id}, req.body);
        if(req.body.password){
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, async (err, hash) => {
                    user.password = hash;
                    // Save User
                    try {
                        const newUser = await user.save();
                        res.send(201);
                        next();
                    } catch (err) {
                        return next(new errors.InternalError(err.message));
                    }

                });

            });

        }else{
        res.send(200);
        next();
        }

    }catch(err){
        return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        
    }

};
//V2
exports.updateUser2= async(req, res, next)=>{
    if(!req.is('application/json')){
        return next(new errors.InvalidContentError("Expects 'application/json'"));
    }

    
    try{
        let user = await User2.findOneAndUpdate({_id: req.params.id}, req.body);
        res.send(200);
        console.log(service);
        next();

    }catch(err){
        return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        
    }

};

    


// if(req.is('password')){
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, async (err, hash) => {
//           // Hash Password
//           user.password = hash;
//           // Save User
//           try {
//             const newUser = await user.save();
//             res.send(201);
//             next();
//           } catch (err) {
//             return next(new errors.InternalError(err.message));
//           }
//         });
//     });