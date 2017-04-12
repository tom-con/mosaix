exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([{
          id: 1,
          name: 'brown'
        },
        {
          id: 2,
          name: 'blue'
        },
        {
          id: 3,
          name: 'gold'
        },
        {
          id: 4,
          name: 'green'
        },
        {
          id: 5,
          name: 'purple'
        },
        {
          id: 6,
          name: 'pink'
        },
        {
          id: 7,
          name: 'oarnge'
        },
        {
          id: 8,
          name: 'black'
        },
        {
          id: 9,
          name: 'white'
        },
        {
          id: 10,
          name: 'red'
        },
        {
          id: 11,
          name: 'teal'
        },
        {
          id: 12,
          name: 'navy'
        },
        {
          id: 13,
          name: 'yellow'
        },
        {
          id: 14,
          name: 'crimson'
        },
        {
          id: 15,
          name: 'salmon'
        },
        {
          id: 16,
          name: 'triangle'
        },
        {
          id: 17,
          name: 'smile'
        },
        {
          id: 18,
          name: 'danger'
        },
        {
          id: 19,
          name: 'solid'
        },
        {
          id: 20,
          name: 'square'
        },
        {
          id: 21,
          name: 'pattern'
        },
        {
          id: 22,
          name: 'text'
        },
        {
          id: 23,
          name: 'circle'
        },
        {
          id: 24,
          name: 'lime'
        },
        {
          id: 25,
          name: 'grey'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));")
    });
};
