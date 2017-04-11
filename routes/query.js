const express = require('express');
const router = express.Router();
const getSpritesByUserLatest = require('./spriteFunctions').getSpritesByUserLatest;
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getAllSpritesLatest = require('./spriteFunctions').getAllSpritesLatest;
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
    console.log(allSprites);
  })
  res.render('sprites', {

  });
});

router.get('/:id', (req, res, next) => {
  console.log("getting by ID", req.params.id);
  getSpritesByUserLatest(req.params.id, 20)
  .then((allSprites) => {
    console.log(allSprites);
  })
  res.render('sprites', {

  });
});


module.exports = router;
