const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorized = require('./loginFunctions').authorized;


router.get('/', authorized, (req, res, next) => {
  res.render('index', {
    button: {
      link: `profile/${req.locals.user.id}`,
      name: 'My profile'
    }
  });
});

router.get('/', (req, res, next) => {
  res.render('index', {
    button: {
      link: `login`,
      name: 'Login'
    }
  });
})

module.exports = router;
