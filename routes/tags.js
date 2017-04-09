const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpriteWithUserCommentsLikes = require('./spriteFunctions.js').getSpriteWithUserCommentsLikes;


router.post('/:id', function(req, res, next) {
  let id = req.params.id;
  let name = req.body.tagname;
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

module.exports = router;
