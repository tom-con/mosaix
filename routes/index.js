const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorized = require('./loginFunctions').authorized;
const getAllSpritesLatest = require('./spriteFunctions').getAllSpritesLatest;

let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};

router.get('/', authorized, (req, res, next) => {
  getAllSpritesLatest(9)
    .then((allSprites) => {
      console.log(allSprites);
      res.render('index', {
        sprites: allSprites,
        currUser: req.locals.user,
        button: {
          link: `profile/${req.locals.user.id}`,
          name: 'My profile'
        },
        log: logout
      });
    })
});

router.get('/', (req, res, next) => {
  res.render('index', {
    button: {
      link: `login`,
      name: 'Login'
    },
    log: login
  });
})

module.exports = router;
