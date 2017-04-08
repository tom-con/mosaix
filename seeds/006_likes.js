exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function() {
      // Inserts seed entries
      return knex('likes').insert([{
          id: 1,
          author_id: 1,
          sprite_id: 4,
          isLiked: false
        },
        {
          id: 2,
          author_id: 2,
          sprite_id: 1,
          isLiked: false
        },
        {
          id: 3,
          author_id: 4,
          sprite_id: 4,
          isLiked: false
        },
        {
          id: 4,
          author_id: 3,
          sprite_id: 7,
          isLiked: false
        },
        {
          id: 5,
          author_id: 6,
          sprite_id: 3,
          isLiked: false
        },
        {
          id: 6,
          author_id: 10,
          sprite_id: 9,
          isLiked: false
        },
        {
          id: 7,
          author_id: 8,
          sprite_id: 5,
          isLiked: false
        },
        {
          id: 8,
          author_id: 7,
          sprite_id: 6,
          isLiked: false
        },
        {
          id: 9,
          author_id: 1,
          sprite_id: 1,
          isLiked: false
        },
        {
          id: 10,
          author_id: 2,
          sprite_id: 4,
          isLiked: false
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));")
    });
};
