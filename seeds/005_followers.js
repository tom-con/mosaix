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
            followed: 1,
            follower: 5
        },
        {
            id: 3,
            followed: 1,
            follower: 7
        },
        {
            id: 4,
            followed: 1,
            follower: 8
        },
        {
            id: 5,
            followed: 1,
            follower: 10
        },
        {
            id: 6,
            followed: 2,
            follower: 7
        },
        {
            id: 7,
            followed: 3,
            follower: 1
        },
        {
            id: 8,
            followed: 3,
            follower: 2
        },
        {
            id: 9,
            followed: 3,
            follower: 4
        },
        {
            id: 10,
            followed: 3,
            follower: 5
        },
        {
            id: 11,
            followed: 3,
            follower: 6
        },
        {
            id: 12,
            followed: 3,
            follower: 7
        },
        {
            id: 13,
            followed: 3,
            follower: 8
        },
        {
            id: 14,
            followed: 3,
            follower: 9
        },
        {
            id: 15,
            followed: 3,
            follower: 10
        },
        {
            id: 16,
            followed: 4,
            follower: 1
        },
        {
            id: 17,
            followed: 4,
            follower: 3
        },
        {
            id: 18,
            followed: 4,
            follower: 6
        },
        {
            id: 19,
            followed: 4,
            follower: 7
        },
        {
            id: 20,
            followed: 4,
            follower: 9
        },
        {
            id: 21,
            followed: 4,
            follower: 10
        },
        {
            id: 22,
            followed: 5,
            follower: 7
        },
        {
            id: 23,
            followed: 5,
            follower: 4
        },
        {
            id: 24,
            followed: 5,
            follower: 1
        },
        {
            id: 25,
            followed: 6,
            follower: 1
        },
        {
            id: 26,
            followed: 6,
            follower: 3
        },
        {
            id: 27,
            followed: 6,
            follower: 4
        },
        {
            id: 28,
            followed: 6,
            follower: 9
        },
        {
            id: 29,
            followed: 7,
            follower: 2
        },
        {
            id: 30,
            followed: 7,
            follower: 5
        },
        {
            id: 31,
            followed: 7,
            follower: 8
        },
        {
            id: 32,
            followed: 7,
            follower: 10
        },
        {
            id: 33,
            followed: 8,
            follower: 1
        },
        {
            id: 34,
            followed: 8,
            follower: 7
        },
        {
            id: 35,
            followed: 9,
            follower: 1
        },
        {
            id: 36,
            followed: 9,
            follower: 2
        },
        {
            id: 37,
            followed: 9,
            follower: 3
        },
        {
            id: 38,
            followed: 9,
            follower: 4
        },
        {
            id: 39,
            followed: 9,
            follower: 5
        },
        {
            id: 40,
            followed: 9,
            follower: 6
        },
        {
            id: 41,
            followed: 9,
            follower: 7
        },
        {
            id: 42,
            followed: 9,
            follower: 8
        },
        {
            id: 43,
            followed: 9,
            follower: 10
        },
        {
            id: 44,
            followed: 10,
            follower: 2
        },
        {
            id: 45,
            followed: 10,
            follower: 5
        },
        {
            id: 46,
            followed: 10,
            follower: 7
        },
        {
            id: 47,
            followed: 10,
            follower: 8
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followers));")
    });
};
