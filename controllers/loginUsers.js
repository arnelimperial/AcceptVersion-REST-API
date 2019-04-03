const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const User1 = require('../models/Register');
const User2 = require('../models/Register2');
const auth = require('../middleware/auth');
const config = require('../config');
require('dotenv').config();

//Get all users
//V1
exports.allUsers1 = async(req, res, next) =>{
    try {
      let user = await User1.find({}, 'username email updatedAt createdAt' );
      res.send({Users: user});
  
    } catch (err) {
        return next(new errors.InvalidContentError(err));
    } 
  
  };
  //V2

  exports.allUsers2 = async(req, res, next) =>{
    try {
      let user = await User2.find({}, 'username email updatedAt createdAt' );
      res.send({Users: user});
  
    } catch (err) {
        return next(new errors.InvalidContentError(err));
    } 
  
  };

  /*********************************************************************/
  
  
  //Get user by username
  exports.userByName1 = async(req, res, next) =>{
    try {
      let user = await User1.find({ username: req.params.username }, 'username email updatedAt createdAt');
      res.send({ User: user });
      next();
  
    } catch (err) {
        return next(new errors.InvalidContentError(err));
    } 
  
  };


  exports.userByName2 = async(req, res, next) =>{
    try {
      let user = await User2.find({ username: req.params.username }, 'username email updatedAt createdAt');
      res.send({ User: user });
      next();
  
    } catch (err) {
        return next(new errors.InvalidContentError(err));
    } 
  
  };

  