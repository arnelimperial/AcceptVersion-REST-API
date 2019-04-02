const User1 = require('../models/User');
const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const Joi = require('joi');

const registrant = Joi.object().keys({
    username: Joi.string().required().max(20).trim().min(3).regex(/^[a-zA-Z0-9]+$/),
    email: Joi.string().required().email().trim().lowercase(),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/).trim(),
    
});


exports.registerV1 = async (req, res, next) => {
    var { email, password, username} = req.body;
   
    const data = req.body;
    const dataCompare = (Joi.validate(data, registrant).error === null);
    const dataCompare1 = Joi.validate(data, registrant);

    if(dataCompare === false){
        res.send({Validation_results: dataCompare1});
        return next();
        
    }else{
        
        const user = new User1({
            username, email, password
        });
        const userPresent = await User1.findOne({ 'email': dataCompare1.value.email })
        if (userPresent) {
            res.send({ Error: 'Email is already in use.'});
            return next();
        }else{

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, async (err, hash) => {
            // Hash Password
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


   }};



  
   


  
    
            
    
        

                

    
       

    
     

      

    // bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(user.password, salt, async (err, hash) => {
    //     // Hash Password
    //     user.password = hash;
    //     // Save User
    //     try {
    //       const newUser = await user.save();
    //       res.send(201);
    //       next();
    //     } catch (err) {
    //       return next(new errors.InternalError(err.message));
    //     }
    //   });
    // });

};