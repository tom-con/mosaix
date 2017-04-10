const knex = require('../knex');
const jwt = require('jsonwebtoken');


let updateLike = (user, sprite, bool) => {
  return knex('likes')
    .update({
      isLiked: bool
    })
    .where('author_id', user)
    .where('sprite_id', sprite)
}

let compareLike = (thisLike, req) => {
  if (thisLike && !thisLike.isLiked) {
    return updateLike(thisLike.author_id, thisLike.sprite_id, true);
  } else if (thisLike && thisLike.isLiked) {
    return updateLike(thisLike.author_id, thisLike.sprite_id, false);
  } else {
    return knex('likes')
      .insert({
        author_id: req.locals.user.id,
        sprite_id: req.params.id,
        isLiked: true
      })
  }
}

let toggleLike = (req, res, next) => {
  knex('likes')
    .where('author_id', req.locals.user.id)
    .where('sprite_id', req.params.id)
    .first()
    .then((thisLike) => {
      compareLike(thisLike, req)
      .then(() => {
        next();
      })
    })

}



module.exports = {
  toggleLike: toggleLike,
  compareLike: compareLike,
  updateLike: updateLike
}
