const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const User1 = require('../models/Register');
const User2 = require('../models/Register2');
const auth = require('../middleware/auth');
const config = require('../config');
require('dotenv').config();
  
  
  //Delete user by ID
    //V1
    exports.deleteUser1 = async (req, res, next)=>{
        try{
            var service1 = await User1.findOneAndRemove({_id: req.params.id});
            res.send(204);
            return next();

        }catch(err){
            return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        }

    };

    //V2
    exports.deleteUser2 = async (req, res, next)=>{
        try{
            var service2 = await User2.findOneAndRemove({_id: req.params.id});
            res.send(204);
            return next();

        }catch(err){
            return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        }

    };




  //Delete user by ID
    //V1
    exports.deleteUser1 = async (req, res, next)=>{
        try{
            var service1 = await User1.findOneAndRemove({_id: req.params.id});
            res.send(204);
            return next();

        }catch(err){
            return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        }

    };

    //V2
    exports.deleteUser2 = async (req, res, next)=>{
        try{
            var service2 = await User2.findOneAndRemove({_id: req.params.id});
            res.send(204);
            return next();

        }catch(err){
            return next(new errors.ResourceNotFoundError(`There is no service with the id of ${req.params.id}`));
        }

    };
