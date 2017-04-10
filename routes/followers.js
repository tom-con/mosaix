const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;


router.get('/', function(req, res, next) {

});

router.post('/', authorized, (req, res, next) => {
  knex('followers')
    .insert({})
})

module.exports = router;
