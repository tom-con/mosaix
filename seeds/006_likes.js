exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('likes').del()
        .then(function() {
            // Inserts seed entries
            return knex('likes').insert([{
                    author_id: 1,
                    sprite_id: 1,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 3,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 4,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 5,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 6,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 8,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 11,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 12,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 14,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 15,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 17,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 19,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 20,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 21,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 24,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 26,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 28,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 29,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 31,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 34,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 36,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 38,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 39,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 41,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 1,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 1,
                    sprite_id: 46,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 3,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 4,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 5,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 11,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 12,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 14,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 15,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 16,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 18,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 20,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 21,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 22,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 24,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 26,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 28,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 29,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 30,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 31,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 33,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 34,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 35,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 38,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 40,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 41,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 2,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 2,
                    sprite_id: 46,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 1,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 2,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 8,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 14,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 15,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 18,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 19,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 20,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 21,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 23,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 26,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 27,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 28,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 31,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 34,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 38,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 39,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 40,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 41,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 42,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 3,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 3,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 4,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 6,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 7,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 8,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 10,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 13,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 14,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 15,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 19,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 20,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 21,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 22,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 25,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 26,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 28,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 31,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 34,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 41,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 43,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 4,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 4,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 1,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 2,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 3,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 4,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 7,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 11,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 12,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 14,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 15,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 17,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 18,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 20,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 21,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 24,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 25,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 26,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 27,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 28,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 31,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 34,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 35,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 37,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 39,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 40,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 41,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 43,
                    isLiked: true
                },
                {
                    author_id: 5,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 45,
                    isLiked: false
                },
                {
                    author_id: 5,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 6,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 12,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 13,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 14,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 15,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 20,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 21,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 23,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 25,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 26,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 27,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 28,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 31,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 32,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 33,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 34,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 35,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 41,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 6,
                    sprite_id: 43,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 44,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 6,
                    sprite_id: 46,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 2,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 5,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 9,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 10,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 14,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 15,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 17,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 20,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 21,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 22,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 23,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 25,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 26,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 27,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 28,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 31,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 32,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 34,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 36,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 40,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 41,
                    isLiked: true
                },
                {
                    author_id: 7,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 45,
                    isLiked: false
                },
                {
                    author_id: 7,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 2,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 3,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 6,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 9,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 11,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 13,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 14,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 15,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 16,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 18,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 20,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 21,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 26,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 28,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 29,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 30,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 31,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 32,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 33,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 34,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 37,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 41,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 8,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 8,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 1,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 5,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 7,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 10,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 13,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 14,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 15,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 16,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 17,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 20,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 21,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 22,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 26,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 28,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 30,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 31,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 32,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 33,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 34,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 35,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 36,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 37,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 39,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 41,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 43,
                    isLiked: false
                },
                {
                    author_id: 9,
                    sprite_id: 44,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 45,
                    isLiked: true
                },
                {
                    author_id: 9,
                    sprite_id: 46,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 1,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 2,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 3,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 4,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 5,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 6,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 7,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 8,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 9,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 10,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 11,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 12,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 13,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 14,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 15,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 16,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 17,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 18,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 19,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 20,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 21,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 22,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 23,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 24,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 25,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 26,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 27,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 28,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 29,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 30,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 31,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 32,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 33,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 34,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 35,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 36,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 37,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 38,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 39,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 40,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 41,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 42,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 43,
                    isLiked: true
                },
                {
                    author_id: 10,
                    sprite_id: 44,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 45,
                    isLiked: false
                },
                {
                    author_id: 10,
                    sprite_id: 46,
                    isLiked: false
                }
            ]);
        }).then(() => {
            return knex.raw("SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));")
        });
};
