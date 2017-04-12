const knex = require('../knex');

let addTagsToSprite = (spriteId) => {
  return knex('sprites_tags')
    .select('tags.name as tagname', 'tags.id as tagId', 'sprites_tags.id as linkId')
    .join('tags', 'tags.id', 'sprites_tags.tag_id')
    .where('sprites_tags.sprite_id', spriteId)
}

let addCommentsToSprite = (spriteId) => {
  return knex('comments')
    .where('comments.sprite_id', spriteId)
    .where('comments.archived_comment', false)
    .select('users.username as author', 'comments.created_at as created_at', 'comments.edited as edited', 'comments.content as content', 'comments.id as comment_id')
    .leftOuterJoin('users', 'users.id', 'comments.author_id')
    .orderBy('comments.created_at', 'ASC')
}

let addLikesToSprite = (spriteId) => {
  return knex('likes')
    .where('likes.sprite_id', spriteId)
    .where('likes.isLiked', true)
    .count('likes.sprite_id')
}


let getSprite = (spriteId) => {
  return knex('sprites')
    .select('sprites.id as id', 'sprites.name as name', 'sprites.render_url as render_url', 'users.id as user_id', 'users.username as username')
    .leftOuterJoin('users', 'sprites.user_id', 'users.id')
    .where('sprites.id', spriteId)
    .where('archived_sprite', false)
    .first();
}

let getSpriteWithUserCommentsLikes = (spriteId) => {
  return Promise.all([
    getSprite(spriteId),
    addCommentsToSprite(spriteId),
    addLikesToSprite(spriteId),
    addTagsToSprite(spriteId)
  ]).then((results) => {
    let [sprite, comments, likes, tags] = results;
    sprite.comments = comments;
    sprite.likes = likes[0].count;
    sprite.tags = tags;
    return sprite;
  })
}

let getOneSprite = (spriteId) => {
  return knex('sprites')
    .select('*')
    .where('sprites.id', spriteId)
    .first()
    .then((spriteFromKnex) => {
      return getSpriteWithUserCommentsLikes(spriteFromKnex.id)
    })
}

let getSpritesByUser = (userId) => {
  return knex('sprites')
    .select('id')
    .where('user_id', userId)
    .orderBy('updated_at', 'DESC')
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.id)))
    })
}

let getAllSprites = () => {
  return knex('sprites')
    .select('id')
    .orderBy('created_at', 'DESC')
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.id)))
    })
}

let getHighestLiked = (spriteIds) => {
  return knex('sprites')
    .select('likes.sprite_id')
    .join('likes', 'sprites.id', 'likes.sprite_id')
    .count('*')
    .whereIn('likes.sprite_id', spriteIds.map(el => el.id))
    .groupBy('likes.sprite_id')
    .orderBy('count', 'DESC')
}

let getSpritesByUserLatest = (userId, limit) => {
  return knex('sprites')
    .select('id')
    .where('user_id', userId)
    .orderBy('created_at', 'DESC')
    .limit(limit)
    .then(getHighestLiked)
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.sprite_id)))
    })
}

let getAllSpritesLatest = (limit) => {
  return knex('sprites')
    .select('id')
    .orderBy('created_at', 'DESC')
    .limit(limit)
    .then(getHighestLiked)
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.sprite_id)))
    })
}

let getSpritesImFollowing = (userId, limit) => {
  return knex('sprites')
    .join('followers', 'followers.followed', 'sprites.user_id')
    .select('sprites.id')
    .where('followers.follower', userId)
    .limit(limit)
    .then(getHighestLiked)
    .then((spriteIds) => {
      return Promise.all(spriteIds.map(el => getSpriteWithUserCommentsLikes(el.sprite_id)))
    })
}

module.exports.getSpritesImFollowing = getSpritesImFollowing;
module.exports.getSpritesByUserLatest = getSpritesByUserLatest;
module.exports.getSpritesByUser = getSpritesByUser;
module.exports.getAllSprites = getAllSprites;
module.exports.getAllSpritesLatest = getAllSpritesLatest;
module.exports.getOneSprite = getOneSprite;
