'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    username: Joi.string().required().min(3).max(16).token(),
    email: Joi.string().email().trim().required().min(5).max(64),
    password: Joi.string().trim().required().min(4).max(32).alphanum(),
    confirmPassword: Joi.string().trim().required().min(4).max(32).alphanum()
  }
};
