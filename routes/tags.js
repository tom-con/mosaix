const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;


router.post('/:id', authorized, (req, res, next) => {
  let id = req.params.id;
  let name = req.body.name;
  knex('tags')
    .where('name', name)
    .first()
    .then((thisTag) => {
      if (thisTag) {
        console.log(thisTag);
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
            console.log(newTag);
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

router.delete('/remove', authorized, (req, res, next) => {
  let id = req.body.id;
  knex('sprites_tags')
    .where('id', id)
    .first()
    .del()
    .then(() => {
      res.status(200).send(true);
    })
})

module.exports = router;
