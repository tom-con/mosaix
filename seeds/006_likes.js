exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function() {
      // Inserts seed entries
      return knex('likes').insert([{
          id: 1,
          author_id: 1,
          sprite_id: 2,
          isLiked: true
        },
        {
          id: 2,
          author_id: 2,
          sprite_id: 1,
          isLiked: true
        },
        {
          id: 3,
          author_id: 4,
          sprite_id: 3,
          isLiked: true
        },
        {
          id: 4,
          author_id: 3,
          sprite_id: 4,
          isLiked: true
        },
        {
          id: 5,
          author_id: 6,
          sprite_id: 5,
          isLiked: true
        },
        {
          id: 6,
          author_id: 10,
          sprite_id: 6,
          isLiked: true
        },
        {
          id: 7,
          author_id: 8,
          sprite_id: 7,
          isLiked: true
        },
        {
          id: 8,
          author_id: 7,
          sprite_id: 8,
          isLiked: true
        },
        {
          id: 9,
          author_id: 1,
          sprite_id: 9,
          isLiked: true
        },
        {
          id: 10,
          author_id: 2,
          sprite_id: 10,
          isLiked: true
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));")
    });
};
