const bcrypt = require('bcryptjs');
const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const User2 = require('../models/Register2');
const auth = require('../middleware/auth2');
const config = require('../config');
require('dotenv/config');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      // Authenticate User
      var user = await auth.authenticate2(email, password);

      // Create JWT
      var token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: '60m'
      });

      var { iat, exp } = jwt.decode(token);
      // Respond with token
      res.send({ iat, exp, token });

      next();
    } catch (err) {
      // User unauthorized
      return next(new errors.UnauthorizedError(err));
    }
  };