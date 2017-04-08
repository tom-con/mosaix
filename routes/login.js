const express = require('express');
const router = express.Router();
const knex = require('../knex')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  let username = req.body.username;
  let plainTextPassword = req.body.password;
  knex('users')
    .where('username', username)
    .first()
    .then((userFromKnex) => {
      if (userFromKnex) {
        console.log(userFromKnex);
        console.log(plainTextPassword, userFromKnex.hashed_password);
        bcrypt.compare(plainTextPassword, userFromKnex.hashed_password, (err, result) => {
            if (result) {
              let token = jwt.sign({
                id: userFromKnex.id,
                username: userFromKnex.username
              }, process.env.JWT_SECRET);
              res.cookie('token', token)
              res.redirect(`/profile/${userFromKnex.id}`);
            } else {
              res.render('login', {
                error: 'Username/password do not match'
              });
            }
          })
      } else {
        res.render('login', {
          error: 'Username does not exist'
        });
      }
    })

})

router.post('/signup', (req, res, next) => {
  console.log("logging in");
  res.redirect('/profile');
})

module.exports = router;
