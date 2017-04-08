const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('sprites')
    .then((spritesFromKnex) => {
      res.render('sprite', {
        sprites: spritesFromKnex
      });
    })
});

module.exports = router;
