const express = require('express');
const router = express.Router();
const knex = require('../knex');
const getSpritesByUser = require('./spriteFunctions').getSpritesByUser;
const getAllSprites = require('./spriteFunctions').getAllSprites;
const getOneSprite = require('./spriteFunctions').getOneSprite;
const jwt = require('jsonwebtoken');



router.get('/', (req, res, next) => {
  getAllSprites()
    .then((allSprites) => {
      console.log(allSprites[8].tags);
      res.render('sprites', {
        sprites: allSprites
      })
    })
});

router.get('/:id', (req, res, next) => {

  let id = req.params.id;
  getOneSprite(id)
    .then((thisSprite) => {
      console.log(thisSprite);
      if (req.cookies.token) {
        let tagCreate = "";
        let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        if (thisSprite.id === decodedToken.id) {
          tagCreate = `<form action="/tags/${thisSprite.id}" method="post"><label>Create Tag: <input type="text" name="tagname"></label><button type="submit">Add</button></form>`
        }
        res.render('sprite', {
          sprite: thisSprite,
          currentUser: decodedToken.username,
          comment: `<form action="/sprite/${thisSprite.id}" method="post"><textarea height="200px" name="content" placeholder=" Add a comment . . ."></textarea><button type="submit">Submit</button></form>`,
          tag: tagCreate
        });
      } else {
        res.render('sprite', {
          sprite: thisSprite,
          comment: '<a href="/login"><button>Login to Comment</button></a>'
        });
      }

    })
})

router.get('/:id/like', (req, res, next) => {
  if (req.cookies.token) {
    let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    console.log(decodedToken, req.params.id);
    knex('likes')
      .where('author_id', decodedToken.id)
      .where('sprite_id', req.params.id)
      .first()
      .then((specificLike) => {
        console.log(specificLike);
        if (specificLike && !specificLike.isLiked) {
          knex('likes')
            .update({
              isLiked: true
            })
            .where('author_id', decodedToken.id)
            .where('sprite_id', req.params.id)
            .then(() => {
              res.redirect(`/sprite/${req.params.id}`);
            })
        } else if (specificLike && specificLike.isLiked) {
          knex('likes')
            .update({
              isLiked: false
            })
            .where('author_id', decodedToken.id)
            .where('sprite_id', req.params.id)
            .then(() => {
              res.redirect(`/sprite/${req.params.id}`);
            })
        } else {
          console.log(decodedToken.id, req.params.id);
          knex('likes')
            .insert({
              author_id: decodedToken.id,
              sprite_id: req.params.id,
              isLiked: true
            })
            .then(() => {
              res.redirect(`/sprite/${req.params.id}`);
            })
        }
      })
  }
})

router.post('/:id', (req, res, next) => {
  if (req.cookies.token) {
    let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    console.log(decodedToken);
    knex('comments')
      .insert({
        sprite_id: req.params.id,
        author_id: decodedToken.id,
        content: req.body.content
      }).then(() => {
        res.redirect(`/sprite/${req.params.id}`);
      })
  }

})

router.delete('/:id', (req, res, next) => {
  knex('comments')
    .where('id', req.body.id)
    .first()
    .del()
    .then(() => {
      res.status(200).send(true);
    })
})

module.exports = router;
