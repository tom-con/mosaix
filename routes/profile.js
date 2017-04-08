const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const getSpriteWithUserCommentsLikes = require('./spriteFunctions.js').getSpriteWithUserCommentsLikes;

router.get('/', (req, res, next) => {
  res.redirect('/index');
});

router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  knex('users')
    .where('id', id)
    .first()
    .then((userFromKnex) => {
      if (userFromKnex) {
        if (req.cookies.token) {
          let decodedUser = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
          console.log(decodedUser.id, id);
          if (decodedUser.id === id) {
            console.log("in the if");
            res.render('myProfile', {
              user: userFromKnex
            });
          } else {
            res.render('profile', {user: userFromKnex});
          }
        } else {
          res.render('profile', {user: userFromKnex});
        }
      } else {
        res.redirect('/index')
      }
    })
})

module.exports = router;
