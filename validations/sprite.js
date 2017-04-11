'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    name: Joi.string().min(1).max(64).required()
  }
};
