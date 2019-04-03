const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const timestamps = require('mongoose-timestamp');


const RegisterSchema = new Schema({
   username: { type: String, match:[/^[a-zA-Z0-9]+$/], unique:true}, 
   email: String,
   password: String
});


  

//V1
RegisterSchema.plugin(timestamps);
mongoose.model('User1', RegisterSchema);
const User1 = mongoose.model('User1', RegisterSchema);
module.exports = User1;





// const mongoose = require('mongoose');
// const timestamp = require('mongoose-timestamp');
// const joi = require('joi');
// const joigoose = require('joigoose')(mongoose);
// const reemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const repw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;

// const joiRegisterSchema = joi.object().keys({
//     username: joi.string().required().trim().min(3).alphanum(),
//     email: joi.string().required().trim().email(),
//     password: joi.string().required().trim().regex(repw)  
// });



// const RegisterSchema = new mongoose.Schema(joigoose.convert(joiRegisterSchema));
// RegisterSchema.plugin(timestamp);
// const User1 = mongoose.model('User1', RegisterSchema);
// module.exports = User1;