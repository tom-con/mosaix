exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([{
          id: 1,
          name: 'armor'
        },
        {
          id: 2,
          name: 'dragon'
        },
        {
          id: 3,
          name: 'kawaii'
        },
        {
          id: 4,
          name: 'magic'
        },
        {
          id: 5,
          name: 'warrior'
        },
        {
          id: 6,
          name: 'weapon'
        },
        {
          id: 7,
          name: 'goblin'
        },
        {
          id: 8,
          name: 'mech'
        },
        {
          id: 9,
          name: 'soldier'
        },
        {
          id: 10,
          name: 'mage'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));")
    });
};
