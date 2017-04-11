const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;
const validations = require('../validations/comments');
const ev = require('express-validation');

router.post('/:id', ev(validations.post), authorized, (req, res, next) => {
  knex('comments')
    .insert({
      sprite_id: req.params.id,
      author_id: req.locals.user.id,
      content: req.body.content
    })
    .then(() => {
      res.redirect(`/sprite/${req.params.id}`);
    })
});

router.post('/:id', (req, res, next) => {
  console.log("NEED TO PUT STUFF FOR WHEN NOT AUTH FOR COMMENTS");
  // NEED TO PUT STUFF FOR WHEN NOT AUTH FOR COMMENTS
})

router.delete('/:id', (req, res, next) => {
  console.log(req.body.id);
  knex('comments')
    .update({
      archived_comment: true
    })
    .where('id', req.body.id)
    .then(() => {
      console.log("here in the knex done");
      res.status(200).send(true);
    })
})

module.exports = router;
