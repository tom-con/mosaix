const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;


router.post('/', authorized, (req, res, next) => {
  knex('comments')
    .insert({
      sprite_id:
    })
});

router.post('/', (req, res, next) => {

})

router.delete('/:id', (req, res, next) => {
  knex('comments')
    .update({
      archived_comment: true
    })
    .where('id', req.body.id)
    .first()
    .then(() => {
      res.status(200).send(true);
    })
})

module.exports = router;
