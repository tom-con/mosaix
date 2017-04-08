exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprites_tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('sprites_tags').insert([{
          id: 1,
          sprite_id: 2,
          tag_id: 6
        },
        {
          id: 2,
          sprite_id: 3,
          tag_id: 7
        },
        {
          id: 3,
          sprite_id: 4,
          tag_id: 2
        },
        {
          id: 4,
          sprite_id: 7,
          tag_id: 3
        },
        {
          id: 5,
          sprite_id: 9,
          tag_id: 1
        },
        {
          id: 6,
          sprite_id: 4,
          tag_id: 5
        },
        {
          id: 7,
          sprite_id: 8,
          tag_id: 1
        },
        {
          id: 8,
          sprite_id: 3,
          tag_id: 7
        },
        {
          id: 9,
          sprite_id: 2,
          tag_id: 2
        },
        {
          id: 10,
          sprite_id: 9,
          tag_id: 9
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sprites_tags_id_seq', (SELECT MAX(id) FROM sprites_tags));")
    });
};
