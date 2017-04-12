exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
        .then(function() {
            // Inserts seed entries
            return knex('comments').insert([{
                    id: 1,
                    sprite_id: 10,
                    author_id: 4,
                    content: "This green looks terrible, clashes with the pink.",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 2,
                    sprite_id: 9,
                    author_id: 1,
                    content: "PURPLE COMBO!",
                    edited: true,
                    archived_comment: false
                },
                {
                    id: 3,
                    sprite_id: 3,
                    author_id: 1,
                    content: "This is my swamp",
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
                    sprite_id: 2,
                    author_id: 6,
                    content: "Cool Colors!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 6,
                    sprite_id: 5,
                    author_id: 2,
                    content: "Bright Colors",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 7,
                    sprite_id: 7,
                    author_id: 1,
                    content: "This is my favorite",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 8,
                    sprite_id: 7,
                    author_id: 3,
                    content: "Looks nice!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 9,
                    sprite_id: 7,
                    author_id: 3,
                    content: "Your designs all look the same lol",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 10,
                    sprite_id: 7,
                    author_id: 4,
                    content: "Your designs all look the same, ROFL",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 11,
                    sprite_id: 8,
                    author_id: 1,
                    content: "I remember back when I was at Hot Topic",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 12,
                    sprite_id: 7,
                    author_id: 3,
                    content: "Your designs all look the same lol",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 13,
                    sprite_id: 12,
                    author_id: 2,
                    content: "IM BLUE ABU DEE ABOO DIE :D",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 14,
                    sprite_id: 12,
                    author_id: 7,
                    content: "AYYYEEE LMAO",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 15,
                    sprite_id: 13,
                    author_id: 8,
                    content: "Feeling a little sick?",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 16,
                    sprite_id: 19,
                    author_id: 1,
                    content: "Classic",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 17,
                    sprite_id: 19,
                    author_id: 4,
                    content: "Nice!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 18,
                    sprite_id: 19,
                    author_id: 5,
                    content: "This makes me happy!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 19,
                    sprite_id: 20,
                    author_id: 4,
                    content: "Make Money, Dolla Dolla Bills",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 20,
                    sprite_id: 20,
                    author_id: 3,
                    content: "Life in a nutshell",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 21,
                    sprite_id: 21,
                    author_id: 3,
                    content: "Nice Meme, nerd",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 22,
                    sprite_id: 29,
                    author_id: 4,
                    content: "Nice this one is my favorite",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 23,
                    sprite_id: 30,
                    author_id: 9,
                    content: "Hahaha nice",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 24,
                    sprite_id: 30,
                    author_id: 3,
                    content: "Cool Colors",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 25,
                    sprite_id: 31,
                    author_id: 10,
                    content: "This isn't very good",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 26,
                    sprite_id: 31,
                    author_id: 9,
                    content: "LOL did you even try?",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 27,
                    sprite_id: 32,
                    author_id: 7,
                    content: "Whats the point in uploading this? Who would want this?",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 28,
                    sprite_id: 31,
                    author_id: 5,
                    content: "ALL OF YOUR CONTENT IS THE SAME",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 29,
                    sprite_id: 32,
                    author_id: 5,
                    content: "ALL OF YOUR CONTENT IS THE SAME",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 30,
                    sprite_id: 33,
                    author_id: 5,
                    content: "ALL OF YOUR CONTENT IS THE SAME",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 31,
                    sprite_id: 34,
                    author_id: 5,
                    content: "ALL OF YOUR CONTENT IS THE SAME",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 32,
                    sprite_id: 35,
                    author_id: 5,
                    content: "ALL OF YOUR CONTENT IS THE SAME",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 33,
                    sprite_id: 38,
                    author_id: 3,
                    content: "This one is sick",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 34,
                    sprite_id: 32,
                    author_id: 9,
                    content: "Probably my favorite, nice series!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 35,
                    sprite_id: 38,
                    author_id: 2,
                    content: "This is waaaaay too busy",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 36,
                    sprite_id: 41,
                    author_id: 1,
                    content: "You are an all star",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 37,
                    sprite_id: 43,
                    author_id: 2,
                    content: "This is a skull away from a Greatful Dead Logo",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 38,
                    sprite_id: 40,
                    author_id: 10,
                    content: "It looks like Christmas!",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 39,
                    sprite_id: 38,
                    author_id: 4,
                    content: "Sweet! Can I use this as a Rasta Rug for a landscape I'm working on?",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 40,
                    sprite_id: 38,
                    author_id: 5,
                    content: "I need to get a Grip..Gotta get a grip... AAAAAAAAGH",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 41,
                    sprite_id: 38,
                    author_id: 7,
                    content: "I like the non-uniform squares, that is clean",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 42,
                    sprite_id: 38,
                    author_id: 8,
                    content: "Yeah man I am totally down to chill after this! I'll holla atchu when I'm out. Do you want me to bring anything else?",
                    edited: false,
                    archived_comment: false
                },
                {
                    id: 43,
                    sprite_id: 38,
                    author_id: 10,
                    content: "DO YOU NEED $8,000? ? ? ? ? ? \n \n Let Bill Nelson tell you how I have run one of these promotion letters — four times in the past year. The First time I received $7,000 in cash and around $7,800 the other three. It this letter is continued as it should be, everyone profits! Yes, and don’t worry about financing or paying money back. After the first time, you’ll see what I mean, and next time you will be more eager and glad. Now, let me give you the complete story and details. \n \n Please forward them and in about 30 days you will be $8,000 richer.",
                    edited: false,
                    archived_comment: false
                },
            ]);
        }).then(() => {
            return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));")
        });
};
