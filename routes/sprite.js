const express = require('express');
const router = express.Router();
const knex = require('../knex');



let addCommentsToSprite = (spriteId) => {
  return knex('comments')
    .where('comments.sprite_id', spriteId)
    .where('comments.archived_comment', false)
    .select('users.username as author', 'comments.created_at as created_at', 'comments.edited as edited', 'comments.content as content')
    .leftOuterJoin('users', 'users.id', 'comments.author_id')
}

let addLikesToSprite = (spriteId) => {
  return knex('likes')
    .where('likes.sprite_id', spriteId)
    .count('likes.sprite_id')
}


let getSprite = (spriteId) => {
  return knex('sprites')
    .select('sprites.id as id', 'sprites.name as name', 'sprites.render_url as render_url', 'users.id as user_id', 'users.username as username')
    .leftOuterJoin('users', 'sprites.user_id', 'users.id')
    .where('sprites.id', spriteId)
    .first();
}

let getSpriteWithUserCommentsLikes = (spriteId) => {
  return Promise.all([
    getSprite(spriteId),
    addCommentsToSprite(spriteId),
    addLikesToSprite(spriteId),
  ]).then((results) => {
    let [sprite, comments, likes, user] = results;
    sprite.comments = comments;
    sprite.likes = likes[0].count;
    return sprite;
  })
}


router.get('/', (req, res, next) => {
  knex('sprites')
    .select('id')
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.id)))
    }).then((allSprites) => {
      res.render('sprites', {
        sprites: allSprites
      })
    })
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  knex('sprites')
    .where('sprites.id', id)
    .first()
    .then((spriteFromKnex) => {
      return getSpriteWithUserCommentsLikes(spriteFromKnex.id)
    })
    .then((thisSprite) => {
      console.log(thisSprite.comments);
      res.render('sprite', {
        sprite: thisSprite
      });
    })
})

module.exports = router;
