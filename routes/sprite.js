const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getOneSprite = require('./spriteFunctions').getOneSprite;
const authorized = require('./loginFunctions').authorized;
const jwt = require('jsonwebtoken');
const toggleLike = require('./likeFunctions').toggleLike;

// get '/' should return all the sprites WORKS
// get '/:id' should return one sprite that is selected WORKS -- Needs to be clean
// post '/' should add a sprite based on who is logged in
// put '/:id' should update a sprite based on who is logged in and which sprite is selected
//delete '/:id' should delete(archive) a sprite based on who is logged in and which sprite is selected

router.get('/', (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      res.render('sprites', {
        sprites: allSprites
      })
    })
});

router.get('/:id', authorized, (req, res, next) => {
  console.log("at the sprite/:id");
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
        comment: `<form action="/sprite/${thisSprite.id}" method="post"><textarea height="200px" name="content" placeholder=" Add a comment . . ."></textarea><button type="submit">Submit</button></form>`,
        tag: tagCreate,
        edit: edit
      });
    })
})
router.get('/:id', (req, res, next) => {
  console.log("tryna get here");
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

router.post('/', (req, res, next) => {
  if (req.cookies.token) {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    let id = decoded.id;
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
  } else {
    res.status(403).send('Not authorized');
  }
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
