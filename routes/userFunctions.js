const knex = require('../knex');

let getFollowersCount = (id) => {
  return knex('followers')
    .where('followed', id)
    .count('follower')
    .first()
}

let getIfFollowed = (follower, followed) => {
  return knex('followers')
    .where('follower', follower)
    .where('followed', followed)
    .first()
    .then((exists) => {
      console.log(exists);
      if (exists) {
        return true;
      } else {
        return false;
      }
    })
}


module.exports = {
  getFollowersCount: getFollowersCount,
  getIfFollowed: getIfFollowed
}
