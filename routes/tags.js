const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;
const ev = require('express-validation');
const validations = require('../validations/tags');


router.post('/:id', ev(validations.post), authorized, (req, res, next) => {
  let id = req.params.id;
  let name = req.body.tagname;
  let user = req.locals.user;
  knex('tags')
    .where('name', name)
    .first()
    .then((thisTag) => {
      if (thisTag) {
        knex('sprites_tags')
          .insert({
            sprite_id: id,
            tag_id: thisTag.id
          })
          .then(() => {
            res.redirect(`/sprite/${id}`);
          })
      } else {
        knex('tags')
          .returning('*')
          .insert({
            name: name
          })
          .then((newTag) => {
            knex('sprites_tags')
              .insert({
                sprite_id: id,
                tag_id: newTag[0].id
              })
              .then(() => {
                res.redirect(`/sprite/${id}`);
              })
          })
      }
    })
});

router.post('/:id', (req, res, next) => {
  res.redirect('/');
})

router.delete('/', authorized, (req, res, next) => {
  let id = req.body.id;
  knex('sprites_tags')
    .select('*')
    .join('sprites', 'sprites.id', 'sprites_tags.sprite_id')
    .where('sprites_tags.id', id)
    .first()
    .then((sprite_tag) => {
      if(sprite_tag.user_id === req.locals.user.id){
        knex('sprites_tags')
          .where('id', id)
          .first()
          .del()
          .then(() => {
            res.status(200).send(true);
          })
      }
    })
})

router.delete('/', (req, res, next) => {
  res.redirect('/');
})

module.exports = router;
