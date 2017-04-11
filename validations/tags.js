'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    tagname: Joi.string().min(1).max(14).required().alphanum().lowercase()
  }
};
