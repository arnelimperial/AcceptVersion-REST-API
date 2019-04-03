const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const timestamps = require('mongoose-timestamp');

const RegisterSchema = new Schema({
    username: { type: String, match:[/^[a-zA-Z0-9]+$/], unique:true}, 
    email: String,
    password: String,
    confirmPassword: String
 
 });


//V2
RegisterSchema.plugin(timestamps);
mongoose.model('User2', RegisterSchema);
const User2 = mongoose.model('User2', RegisterSchema);
module.exports = User2;
