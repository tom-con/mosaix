const express = require('express');
const router = express.Router();
const getSpritesByUserLatest = require('./spriteFunctions').getSpritesByUserLatest;
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getAllSpritesLatest = require('./spriteFunctions').getAllSpritesLatest;
const getSpritesImFollowing = require('./spriteFunctions').getSpritesImFollowing;
const getOneSprite = require('./spriteFunctions').getOneSprite;
const authorized = require('./loginFunctions').authorized;
const jwt = require('jsonwebtoken');
const toggleLike = require('./likeFunctions').toggleLike;

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

module.exports = router;
