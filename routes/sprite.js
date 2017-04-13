const jwt = require('jsonwebtoken');
const express = require('express');
const ev = require('express-validation');
const validations = require('../validations/sprite');
const knex = require('../knex');
const router = express.Router();
const authorized = require('./loginFunctions').authorized;
const toggleLike = require('./likeFunctions').toggleLike;
const {
  getSpritesByUser,
  getAllSprites,
  getOneSprite
} = require('./spriteFunctions');

let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};

router.get('/', authorized, (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      res.render('sprites', {
        profInfo: `<h3>${req.locals.user.username}</h3>
        <img src="${req.locals.user.picture}" class="my-profile-img" alt="profile picture">`,
        myProfile: `<tr><td><button class="sidebar-buttom"><a href="/profile/${req.locals.user.id}">My Profile</a></button></td></tr>`,
        title: "All Sprites",
        sprites: allSprites,
        log: logout,
        myCreaText: 'My Creations',
        myCreaLink: '/query/creations'
      })
    })
});

router.get('/', (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      res.render('sprites', {
        title: "All Sprites",
        sprites: allSprites,
        log: login,
        myCreaText: 'Create Account',
        myCreaLink: '/login'
      })
    })
});

router.get('/piskel', authorized, (req, res, next) => {
  let sprite = JSON.parse(req.query.serial).piskel;
  knex('sprites')
    .returning(['id', 'name', 'user_id', 'render_url'])
    .insert({
      name: sprite.name,
      description: sprite.description,
      user_id: req.locals.user.id,
      render_url: JSON.parse(sprite.layers[0]).chunks[0].base64PNG
    })
    .then((sprite) => {
      let likedSprite = sprite[0];
      knex('likes')
        .insert({
          author_id: req.locals.user.id,
          sprite_id: likedSprite.id,
          isLiked: false
        })
        .then(() => {
          res.status(200).send((req.locals.user.id).toString());
        })
    })
})

router.get('/piskel', (req, res, next) => {
  console.log('NEED ERROR HANDLING FOR CREATION WITHOUT AUTH');
})

router.get('/:id', authorized, (req, res, next) => {
  let id = req.params.id;
  let user = req.locals.user;
  getOneSprite(id)
    .then((thisSprite) => {
      let tagCreate = "";
      let edit = "";
      if (thisSprite.user_id === user.id) {
        tagCreate = `<form action="/tags/${thisSprite.id}" method="post"><label>Create Tag: <input type="text" name="tagname" class="transparent"></label><button type="submit" class="tag-buttom">Add</button></form>`
        edit = `<button id="edit" data-id="${thisSprite.id}">Edit</button>`
      }
      console.log(thisSprite);
      res.render('sprite', {
        sprite: thisSprite,
        currentUser: user,
        comment: `<form action="/comments/${thisSprite.id}" method="post"><textarea class="comment-text transparent" height="200px" name="content" placeholder=" Add a comment . . ."></textarea><button class="comment-buttoms" type="submit">Submit</button></form>`,
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

router.post('/', ev(validations.post), authorized, (req, res, next) => {
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
