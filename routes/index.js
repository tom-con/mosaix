const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
