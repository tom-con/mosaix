const express = require('express');
const router = express.Router();
const getSpritesByUserLatest = require('./spriteFunctions').getSpritesByUserLatest;
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getSpritesById = require('./spriteFunctions').getSpritesById;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getAllSpritesLatest = require('./spriteFunctions').getAllSpritesLatest;
const getSpritesImFollowing = require('./spriteFunctions').getSpritesImFollowing;
const getSpritesBySpriteIds = require('./spriteFunctions').getSpritesBySpriteIds;
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


router.get('/trending', authorized, (req, res, next) => {
  getAllSpritesLatest(20)
    .then((allSprites) => {
      res.render('query', {
        title: "Trending Sprites",
        sprites: allSprites,
        log: login,
        myCreaText: 'Create Account',
        myCreaLink: '/login'
      })
    })
});

router.get('/trending', (req, res, next) => {
  getAllSpritesLatest(20)
    .then((allSprites) => {
      res.render('query', {
        title: "Trending Sprites",
        sprites: allSprites,
        log: login,
        myCreaText: 'My Creations',
        myCreaLink: `/query/creations`
      })
    })
});

router.get('/following', authorized, (req, res, next) => {
  getSpritesImFollowing(req.locals.user.id, 20)
    .then((allSprites) => {
      res.render('query', {
        title: "Following",
        sprites: allSprites,
        log: login,
        user: req.locals.user,
        myCreaText: 'My Creations',
        myCreaLink: `/query/creations`
      })
    })
})

router.get('/following', (req, res, next) => {
  res.redirect('/');
})


router.get('/creations', authorized, (req, res, next) => {
  getSpritesByUser(req.locals.user.id)
    .then((allSprites) => {
      res.render('query', {
        title: "My Creations",
        sprites: allSprites,
        log: login,
        user: req.locals.user,
        myCreaText: 'My Creations',
        myCreaLink: `/query/creations`
      })
    })
})


router.get('/:tag', authorized, (req, res, next) => {
  knex('sprites')
    .select('sprites.id')
    .join('sprites_tags', 'sprites.id', 'sprites_tags.sprite_id')
    .join('tags', 'tags.id', 'sprites_tags.tag_id')
    .where('tags.name', req.params.tag)
    .then((spriteIds) => {
      getSpritesBySpriteIds(spriteIds)
      .then((allSprites) => {
        console.log(allSprites);
        res.render('query', {
          title: `Search results for: '${req.params.tag}'`,
          sprites: allSprites,
          log: login,
          myCreaText: 'My Creations',
          myCreaLink: `/query/creations`
        })
      })
    })
})

router.get('/:tag', (req, res, next) => {
  knex('sprites')
    .select('sprites.id')
    .join('sprites_tags', 'sprites.id', 'sprites_tags.sprite_id')
    .join('tags', 'tags.id', 'sprites_tags.tag_id')
    .where('tags.name', req.params.tag)
    .then((spriteIds) => {
      getSpritesBySpriteIds(spriteIds)
      .then((allSprites) => {
        console.log(allSprites);
        res.render('query', {
          title: `Search results for: '${req.params.tag}'`,
          sprites: allSprites,
          log: login,
          myCreaText: 'Create Account',
          myCreaLink: '/login'
        })
      })
    })
})

module.exports = router;
