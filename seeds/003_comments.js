exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([{
          id: 1,
          sprite_id: 1,
          author_id: 6,
          content: "Dude this is awesome. Keep up the good work.",
          edited: false,
          archived_comment: false
        },
        {
          id: 2,
          sprite_id: 1,
          author_id: 3,
          content: "Wow, nice one! Good use of color for depth!!",
          edited: true,
          archived_comment: false
        },
        {
          id: 3,
          sprite_id: 2,
          author_id: 3,
          content: "Haha! This one looks funny to me.",
          edited: false,
          archived_comment: false
        },
        {
          id: 4,
          sprite_id: 3,
          author_id: 1,
          content: "I think it could use a little more shading for maximum effect. Other than that, though, nice job!",
          edited: false,
          archived_comment: false
        },
        {
          id: 5,
          sprite_id: 8,
          author_id: 2,
          content: "Probably the best I've seen on this site so far.",
          edited: false,
          archived_comment: false
        },
        {
          id: 6,
          sprite_id: 6,
          author_id: 6,
          content: "Wooooahhhhhh",
          edited: false,
          archived_comment: false
        },
        {
          id: 7,
          sprite_id: 5,
          author_id: 10,
          content: "Damn that's dope. Wish I could draw like this. Lmao.",
          edited: false,
          archived_comment: false
        },
        {
          id: 8,
          sprite_id: 9,
          author_id: 1,
          content: "Awful.",
          edited: false,
          archived_comment: false
        },
        {
          id: 9,
          sprite_id: 10,
          author_id: 4,
          content: "Your designs all look the same lol",
          edited: false,
          archived_comment: false
        },
        {
          id: 10,
          sprite_id: 8,
          author_id: 8,
          content: "Dank",
          edited: false,
          archived_comment: false
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));")
    });
};
