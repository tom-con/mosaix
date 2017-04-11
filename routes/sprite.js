const jwt = require('jsonwebtoken');
const express = require('express');
const ev = require('express-validation');
const validations = require('../validations/comments');
const knex = require('../knex');
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getOneSprite = require('./spriteFunctions').getOneSprite;
const authorized = require('./loginFunctions').authorized;
const toggleLike = require('./likeFunctions').toggleLike;
const router = express.Router();

let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};

router.get('/', (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      res.render('sprites', {
        title: "All Sprites",
        sprites: allSprites,
        log: login
      })
    })
});

router.get('/:id', authorized, (req, res, next) => {
  let id = req.params.id;
  let user = req.locals.user;
  getOneSprite(id)
    .then((thisSprite) => {
      let tagCreate = "";
      let edit = "";
      if (thisSprite.user_id === user.id) {
        tagCreate = `<form action="/tags/${thisSprite.id}" method="post"><label>Create Tag: <input type="text" name="tagname"></label><button type="submit">Add</button></form>`
        edit = `<button id="edit" data-id="${thisSprite.id}">Edit</button>`
      }
      res.render('sprite', {
        sprite: thisSprite,
        currentUser: user.username,
        comment: `<form action="/comments/${thisSprite.id}" method="post"><textarea height="200px" name="content" placeholder=" Add a comment . . ."></textarea><button type="submit">Submit</button></form>`,
        tag: tagCreate,
        log: logout,
        edit: edit
      });
    })
})
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  getOneSprite(id)
    .then((thisSprite) => {
      res.render('sprite', {
        sprite: thisSprite,
        comment: '<a href="/login"><button>Login to Comment</button></a>'
      });
    })
})



router.get('/:id/like', authorized, toggleLike, (req, res, next) => {
  res.redirect(`/sprite/${req.params.id}`);
})

router.get('/:id/like', (req, res, next) => {
  res.redirect(`/sprite/${req.params.id}`);
})


router.post('/', authorized, (req, res, next) => {
  let id = req.locals.user.id;
  if (req.files.picture_url.mimetype === 'image/png') {
    let picture_url = req.files.picture_url;
    picture_url.mv(`./public/images/uploads/sprites/${picture_url.name.replace(/png$/, ".png")}`, (writeErr) => {
      if (writeErr) {
        return res.status(500).send(err);
      } else {
        knex('sprites')
          .insert({
            render_url: `http://localhost:3000/images/uploads/sprites/${picture_url.name.replace(/png$/, ".png")}`,
            user_id: id,
            name: req.body.name
          })
          .then(() => {
            res.redirect(`/profile/${id}`);
          })
      }
    });
  }
})

router.post('/', (req, res, next) => {
  //NEED TO RENDER A NOT LOGGED IN PAGE
  res.status(403).send('Not authorized');
})

router.post('/:id/update', (req, res, next) => {
  let id = req.params.id;
  knex('sprites')
    .update({
      name: req.body.name
    })
    .where('id', id)
    .then(() => {
      res.redirect(`/sprite/${id}`)
    })
})

module.exports = router;
