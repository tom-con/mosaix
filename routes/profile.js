const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const getSpritesByUser = require('./spriteFunctions.js').getSpritesByUser;


let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};

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
                  sprites: allSprites,
                  log: logout
                })
              })
          } else {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('profile', {
                  user: userFromKnex,
                  sprites: allSprites,
                  log: logout
                })
              })
          }
        } else {
          getSpritesByUser(id)
            .then((allSprites) => {
              res.render('profile', {
                user: userFromKnex,
                sprites: allSprites,
                log: login
              })
            })
        }
      } else {
        res.redirect('/')
      }
    })
})

router.get('/:id/settings', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then((thisUser) => {
      res.render('settings', {
        user: thisUser,
        log: logout
      });
    })
})

router.post('/:id/settings/upload', (req, res) => {
  if(req.files.picture_url.mimetype === 'image/png') {
    let picture_url = req.files.picture_url;
    picture_url.mv(`./public/images/uploads/user_avatars/${picture_url.name.replace(/png$/, ".png")}`, function(writeErr) {
    if (writeErr) {
      return res.status(500).send(err);
    } else {
      knex('users')
        .update('user_picture', `http://localhost:3000/images/uploads/user_avatars/${picture_url.name.replace(/png$/, ".png")}`)
        .where('id', req.params.id)
        .then(() => {
          res.redirect(`/profile/${req.params.id}`);
        })
    }
  });
  } else {

  }

})

router.put('/:id/settings', (req, res, next) => {
  let updatedInfo = req.body;
  knex('users')
    .update(updatedInfo)
    .where('id', req.params.id)
    .then(() => {
      res.status(200).send(true);
    })
})

router.delete('/:id/delete', (req, res, next) => {
  let updatedInfo = req.body;
  knex('users')
    .update(updatedInfo)
    .where('id', req.params.id)
    .then(() => {
      res.clearCookie('token');
      res.status(200).send(true);
    })
})

module.exports = router;
