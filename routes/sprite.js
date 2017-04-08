const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpriteWithUserCommentsLikes = require('./spriteFunctions.js').getSpriteWithUserCommentsLikes;


router.get('/', (req, res, next) => {
  knex('sprites')
    .select('id')
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.id)))
    }).then((allSprites) => {
      res.render('sprites', {
        sprites: allSprites
      })
    })
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  knex('sprites')
    .where('sprites.id', id)
    .first()
    .then((spriteFromKnex) => {
      return getSpriteWithUserCommentsLikes(spriteFromKnex.id)
    })
    .then((thisSprite) => {
      res.render('sprite', {
        sprite: thisSprite
      });
    })
})

module.exports = router;
