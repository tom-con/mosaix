exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('followers').del()
    .then(function() {
      // Inserts seed entries
      return knex('followers').insert([{
          id: 1,
          followed: 1,
          follower: 2
        },
        {
          id: 2,
          followed: 2,
          follower: 1
        },
        {
          id: 3,
          followed: 7,
          follower: 4
        },
        {
          id: 4,
          followed: 7,
          follower: 5
        },
        {
          id: 5,
          followed: 7,
          follower: 8
        },
        {
          id: 6,
          followed: 5,
          follower: 6
        },
        {
          id: 7,
          followed: 10,
          follower: 1
        },
        {
          id: 8,
          followed: 10,
          follower: 2
        },
        {
          id: 9,
          followed: 9,
          follower: 4
        },
        {
          id: 10,
          followed: 4,
          follower: 3
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followers));")
    });
};
