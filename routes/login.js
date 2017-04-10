const express = require('express');
const router = express.Router();
const knex = require('../knex')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const makeJWT = require('./loginFunctions').makeJWT;

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
        bcrypt.compare(plainTextPassword, userFromKnex.hashed_password, (err, result) => {
          if (result) {
            res.cookie('token', makeJWT(userFromKnex));
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
  if (req.body.password !== req.body.confirmPassword) {
    res.render('login', {
      error2: 'Passwords do not match'
    });
  } else {
    let newUser = {
      username: req.body.username,
      hashed_password: bcrypt.hashSync(req.body.password, 12),
      email: req.body.email
    };
    knex('users')
      .returning('*')
      .insert(newUser)
      .then((user) => {
        console.log(user);
        let token = makeJWT(user[0]);
        res.cookie('token', token);
        res.redirect(`/profile/${user[0].id}`)
      })
  }
})

router.get('/logout', (req,res,next) => {
  res.clearCookie('token');
  res.redirect('/');
})

module.exports = router;
