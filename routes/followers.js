const express = require('express');
const router = express.Router();
const knex = require('../knex');
const authorized = require('./loginFunctions').authorized;


router.get('/', function(req, res, next) {

});

router.post('/', authorized, (req, res, next) => {
  knex('followers')
    .where('followed', req.body.id)
    .where('follower', req.locals.user.id)
    .then((exists) => {
      if (exists) {
        res.redirect(`/profile/${req.body.id}`)
      } else {
        knex('followers')
          .insert({
            followed: req.body.id,
            follower: req.locals.user.id
          })
          .then(() => {
            res.redirect(`/profile/${req.body.id}`)
          })
      }
    })

})

router.post('/', (req, res, next) => {
  console.log("NEEDS ERROR PAGE FOR WHEN YOU ARE NOT AUTH TO FOLLOW");
})

module.exports = router;
