'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    content: Joi.string().min(1).max(512).required()
  }
};
