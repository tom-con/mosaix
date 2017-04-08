const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getOneSprite = require('./spriteFunctions').getOneSprite;



router.get('/', (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      res.render('sprites', {
        sprites: allSprites
      })
    })
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  getOneSprite(id)
    .then((thisSprite) => {
      res.render('sprite', {
        sprite: thisSprite
      });
    })
})

module.exports = router;
