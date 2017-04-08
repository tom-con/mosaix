const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpriteWithUserCommentsLikes = require('./spriteFunctions.js').getSpriteWithUserCommentsLikes;

router.get('/', function(req, res, next) {
  res.render('query');
});

module.exports = router;
