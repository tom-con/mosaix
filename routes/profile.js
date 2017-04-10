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

router.get('/:id', authorized, (req, res, next) => {
  let id = parseInt(req.params.id);
  knex('users')
    .where('id', id)
    .first()
    .then((userFromKnex) => {
      if (userFromKnex) {
        let data = {
          user: userFromKnex,
          sprites: allSprites,
          log: logout
        }
          if (req.locals.user.id === id) {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('myProfile', data)
              })
          } else {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('profile', data)
              })
          }

        // else {
        //   getSpritesByUser(id)
        //     .then((allSprites) => {
        //       res.render('profile', data)
        //     })
        // }
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
          res.redirect(`/profile/${req.params.id}/settings`);
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
