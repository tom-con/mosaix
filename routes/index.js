const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
  let button = {
    link: `login`,
    name: 'Login'
  };
  if (req.cookies.token) {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
    button = {
      link: `profile/${decoded.id}`,
      name: 'My profile'
    };
  }
  res.render('index', {
    button: button
  });
});

module.exports = router;
