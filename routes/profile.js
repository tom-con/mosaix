const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const getSpritesByUser = require('./spriteFunctions.js').getSpritesByUser;

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
          if (decodedUser.id === id) {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('myProfile', {
                  user: userFromKnex,
                  sprites: allSprites
                })
              })
          } else {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('profile', {
                  user: userFromKnex,
                  sprites: allSprites
                })
              })
          }
        } else {
          getSpritesByUser(id)
            .then((allSprites) => {
              res.render('profile', {
                user: userFromKnex,
                sprites: allSprites
              })
            })
        }
      } else {
        res.redirect('/index')
      }
    })
})

module.exports = router;
