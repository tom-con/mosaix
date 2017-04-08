const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('sprites')
    .select('sprites.id as id', 'users.id as user_id', 'users.username as username', 'sprites.name as name', 'sprites.render_url as render_url')
    .leftOuterJoin('users', 'users.id', 'sprites.user_id')
    .then((spritesFromKnex) => {
      res.render('sprite', {
        sprites: spritesFromKnex
      });
    })
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  knex('sprites')
    .where('sprites.id', id)
    .select('sprites.id as id', 'users.id as user_id', 'users.username as username', 'sprites.name as name', 'sprites.render_url as render_url')
    .leftOuterJoin('users', 'users.id', 'sprites.user_id')
    .then((spriteFromKnex) => {
      console.log(spriteFromKnex);
      res.render('sprite', {
        sprites: spriteFromKnex
      });
    })
})

module.exports = router;
