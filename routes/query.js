const express = require('express');
const router = express.Router();
const getSpritesByUserLatest = require('./spriteFunctions').getSpritesByUserLatest;
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getSpritesById = require('./spriteFunctions').getSpritesById;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getAllSpritesLatest = require('./spriteFunctions').getAllSpritesLatest;
const getSpritesImFollowing = require('./spriteFunctions').getSpritesImFollowing;
const getOneSprite = require('./spriteFunctions').getOneSprite;
const authorized = require('./loginFunctions').authorized;
const jwt = require('jsonwebtoken');
const toggleLike = require('./likeFunctions').toggleLike;
const knex = require('../knex');

let login = {
  link: '/login',
  text: 'Login'
};

let logout = {
  link: '/login/logout',
  text: 'Logout'
};


router.get('/trending', (req, res, next) => {
  getAllSpritesLatest(20)
    .then((allSprites) => {
      res.render('sprites', {
        title: "Trending Sprites",
        sprites: allSprites,
        log: login
      })
    })
});

router.get('/following', authorized, (req, res, next) => {
  getSpritesImFollowing(req.locals.user.id, 20)
    .then((allSprites) => {
      res.render('sprites', {
        title: "Following",
        sprites: allSprites,
        log: login
      })
    })
})

router.get('/following', (req, res, next) => {
  res.redirect('/');
})

// router.get('/:tag', (req, res, next) => {
//   knex('tags')
//     .where('name', req.params.tag)
//     .first()
//     .then((tag) => {
//       knex('sprites')
//         .select('sprites.id')
//         .join('tags', 'tags.sprite_id', 'sprites.id')
//         .where('tags.name', tag)
//         .then(getSpritesById)
//         .then((allSprites) => {
//           console.log(allSprites);
//           res.render('sprites', {
//             title: `Search results for: '${tag}'`,
//             sprites: allSprites,
//             log: login
//           })
//         })
//     })
// })

router.get('/:tag', (req, res, next) => {
  knex('sprites')
    .select('*')
    .join('sprites_tags', 'sprites.id', 'sprites_tags.sprite_id')
    .join('tags', 'tags.id', 'sprites_tags.tag_id')
    .where('tags.name', req.params.tag)
    .first()
    .then((allSprites) => {
      console.log(allSprites);
      res.render('sprites', {
        title: `Search results for: '${req.params.tag}'`,
        sprites: allSprites,
        log: login
      })
    })
})

module.exports = router;
