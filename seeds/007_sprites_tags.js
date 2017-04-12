exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprites_tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('sprites_tags').insert([{
          id: 1,
          sprite_id: 1,
          tag_id: 1
        },
        {
          id: 2,
          sprite_id: 1,
          tag_id: 2
        },
        {
          id: 3,
          sprite_id: 1,
          tag_id: 16
        },
        {
          id: 4,
          sprite_id: 2,
          tag_id: 2
        },
        {
          id: 5,
          sprite_id: 2,
          tag_id: 3
        },
        {
          id: 6,
          sprite_id: 2,
          tag_id: 13
        },
        {
          id: 7,
          sprite_id: 2,
          tag_id: 16
        },
        {
          id: 8,
          sprite_id: 3,
          tag_id: 2
        },
        {
          id: 9,
          sprite_id: 3,
          tag_id: 4
        },
        {
          id: 10,
          sprite_id: 3,
          tag_id: 16
        },
        {
          id: 11,
          sprite_id: 4,
          tag_id: 4
        },{
          id: 12,
          sprite_id: 4,
          tag_id: 5
        },
        {
          id: 13,
          sprite_id: 4,
          tag_id: 16
        },
        {
          id: 14,
          sprite_id: 5,
          tag_id: 24
        },
        {
          id: 15,
          sprite_id: 5,
          tag_id: 4
        },
        {
          id: 16,
          sprite_id: 5,
          tag_id: 6
        },
        {
          id: 17,
          sprite_id: 5,
          tag_id: 16
        },
        {
          id: 18,
          sprite_id: 6,
          tag_id: 12
        },
        {
          id: 19,
          sprite_id: 6,
          tag_id: 2
        },
        {
          id: 20,
          sprite_id: 6,
          tag_id: 1
        },
        {
          id: 21,
          sprite_id: 6,
          tag_id: 16
        },
        {
          id: 22,
          sprite_id: 7,
          tag_id: 7
        },
        {
          id: 23,
          sprite_id: 7,
          tag_id: 13
        },
        {
          id: 24,
          sprite_id: 7,
          tag_id: 16
        },
        {
          id: 25,
          sprite_id: 8,
          tag_id: 6
        },
        {
          id: 26,
          sprite_id: 8,
          tag_id: 8
        },
        {
          id: 27,
          sprite_id: 8,
          tag_id: 16
        },
        {
          id: 28,
          sprite_id: 9,
          tag_id: 5
        },
        {
          id: 29,
          sprite_id: 9,
          tag_id: 16
        },
        {
          id: 30,
          sprite_id: 10,
          tag_id: 4
        },
        {
          id: 31,
          sprite_id: 10,
          tag_id: 6
        },
        {
          id: 32,
          sprite_id: 10,
          tag_id: 16
        },
        {
          id: 33,
          sprite_id: 11,
          tag_id: 9
        },
        {
          id: 34,
          sprite_id: 11,
          tag_id: 5
        },
        {
          id: 35,
          sprite_id: 11,
          tag_id: 16
        },
        {
          id: 36,
          sprite_id: 12,
          tag_id: 2
        },
        {
          id: 37,
          sprite_id: 12,
          tag_id: 17
        },
        {
          id: 38,
          sprite_id: 13,
          tag_id: 4
        },
        {
          id: 39,
          sprite_id: 13,
          tag_id: 17
        },
        {
          id: 40,
          sprite_id: 14,
          tag_id: 7
        },
        {
          id: 41,
          sprite_id: 14,
          tag_id: 17
        },
        {
          id: 42,
          sprite_id: 15,
          tag_id: 6
        },
        {
          id: 43,
          sprite_id: 15,
          tag_id: 17
        },
        {
          id: 44,
          sprite_id: 16,
          tag_id: 17
        },
        {
          id: 45,
          sprite_id: 17,
          tag_id: 10
        },
        {
          id: 46,
          sprite_id: 17,
          tag_id: 17
        },
        {
          id: 47,
          sprite_id: 18,
          tag_id: 9
        },
        {
          id: 48,
          sprite_id: 18,
          tag_id: 17
        },
        {
          id: 49,
          sprite_id: 19,
          tag_id: 13
        },
        {
          id: 50,
          sprite_id: 19,
          tag_id: 17
        },
        {
          id: 51,
          sprite_id: 20,
          tag_id: 25
        },
        {
          id: 52,
          sprite_id: 20,
          tag_id: 14
        },
        {
          id: 53,
          sprite_id: 20,
          tag_id: 8
        },
        {
          id: 54,
          sprite_id: 20,
          tag_id: 22
        },
        {
          id: 55,
          sprite_id: 21,
          tag_id: 13
        },
        {
          id: 56,
          sprite_id: 21,
          tag_id: 8
        },
        {
          id: 57,
          sprite_id: 21,
          tag_id: 22
        },
        {
          id: 58,
          sprite_id: 22,
          tag_id: 8
        },
        {
          id: 59,
          sprite_id: 22,
          tag_id: 18
        },
        {
          id: 60,
          sprite_id: 23,
          tag_id: 2
        },
        {
          id: 61,
          sprite_id: 23,
          tag_id: 18
        },
        {
          id: 62,
          sprite_id: 24,
          tag_id: 4
        },
        {
          id: 63,
          sprite_id: 24,
          tag_id: 18
        },
        {
          id: 64,
          sprite_id: 25,
          tag_id: 7
        },
        {
          id: 65,
          sprite_id: 25,
          tag_id: 18
        },
        {
          id: 66,
          sprite_id: 26,
          tag_id: 6
        },
        {
          id: 67,
          sprite_id: 26,
          tag_id: 18
        },
        {
          id: 68,
          sprite_id: 27,
          tag_id: 11
        },
        {
          id: 69,
          sprite_id: 27,
          tag_id: 18
        },
        {
          id: 70,
          sprite_id: 28,
          tag_id: 9
        },
        {
          id: 71,
          sprite_id: 29,
          tag_id: 13
        },
        {
          id: 72,
          sprite_id: 29,
          tag_id: 18
        },
        {
          id: 73,
          sprite_id: 30,
          tag_id: 5
        },
        {
          id: 74,
          sprite_id: 30,
          tag_id: 2
        },
        {
          id: 75,
          sprite_id: 30,
          tag_id: 8
        },
        {
          id: 76,
          sprite_id: 30,
          tag_id: 22
        },
        {
          id: 77,
          sprite_id: 31,
          tag_id: 8
        },
        {
          id: 78,
          sprite_id: 31,
          tag_id: 19
        },
        {
          id: 79,
          sprite_id: 31,
          tag_id: 20
        },
        {
          id: 80,
          sprite_id: 32,
          tag_id: 2
        },
        {
          id: 81,
          sprite_id: 32,
          tag_id: 19
        },
        {
          id: 82,
          sprite_id: 32,
          tag_id: 20
        },
        {
          id: 83,
          sprite_id: 33,
          tag_id: 14
        },
        {
          id: 84,
          sprite_id: 33,
          tag_id: 10
        },
        {
          id: 85,
          sprite_id: 33,
          tag_id: 19
        },
        {
          id: 86,
          sprite_id: 33,
          tag_id: 20
        },
        {
          id: 87,
          sprite_id: 34,
          tag_id: 12
        },
        {
          id: 88,
          sprite_id: 34,
          tag_id: 2
        },
        {
          id: 89,
          sprite_id: 34,
          tag_id: 19
        },
        {
          id: 90,
          sprite_id: 34,
          tag_id: 20
        },
        {
          id: 91,
          sprite_id: 35,
          tag_id: 15
        },
        {
          id: 92,
          sprite_id: 35,
          tag_id: 6
        },
        {
          id: 93,
          sprite_id: 35,
          tag_id: 19
        },
        {
          id: 94,
          sprite_id: 35,
          tag_id: 20
        },
        {
          id: 95,
          sprite_id: 36,
          tag_id: 8
        },
        {
          id: 96,
          sprite_id: 36,
          tag_id: 6
        },
        {
          id: 97,
          sprite_id: 36,
          tag_id: 5
        },
        {
          id: 98,
          sprite_id: 36,
          tag_id: 20
        },
        {
          id: 99,
          sprite_id: 37,
          tag_id: 2
        },
        {
          id: 100,
          sprite_id: 37,
          tag_id: 8
        },
        {
          id: 101,
          sprite_id: 37,
          tag_id: 20
        },
        {
          id: 102,
          sprite_id: 37,
          tag_id: 21
        },
        {
          id: 103,
          sprite_id: 38,
          tag_id: 24
        },
        {
          id: 104,
          sprite_id: 38,
          tag_id: 4
        },
        {
          id: 105,
          sprite_id: 38,
          tag_id: 13
        },
        {
          id: 106,
          sprite_id: 38,
          tag_id: 8
        },
        {
          id: 107,
          sprite_id: 38,
          tag_id: 5
        },
        {
          id: 108,
          sprite_id: 38,
          tag_id: 20
        },
        {
          id: 109,
          sprite_id: 38,
          tag_id: 21
        },
        {
          id: 110,
          sprite_id: 39,
          tag_id: 5
        },
        {
          id: 111,
          sprite_id: 39,
          tag_id: 2
        },
        {
          id: 112,
          sprite_id: 39,
          tag_id: 20
        },
        {
          id: 113,
          sprite_id: 39,
          tag_id: 21
        },
        {
          id: 114,
          sprite_id: 40,
          tag_id: 10
        },
        {
          id: 115,
          sprite_id: 40,
          tag_id: 4
        },
        {
          id: 116,
          sprite_id: 40,
          tag_id: 20
        },
        {
          id: 117,
          sprite_id: 40,
          tag_id: 21
        },
        {
          id: 118,
          sprite_id: 41,
          tag_id: 11
        },
        {
          id: 119,
          sprite_id: 41,
          tag_id: 7
        },
        {
          id: 120,
          sprite_id: 41,
          tag_id: 22
        },
        {
          id: 121,
          sprite_id: 42,
          tag_id: 2
        },
        {
          id: 122,
          sprite_id: 42,
          tag_id: 23
        },
        {
          id: 123,
          sprite_id: 42,
          tag_id: 21
        },
        {
          id: 124,
          sprite_id: 43,
          tag_id: 10
        },
        {
          id: 125,
          sprite_id: 43,
          tag_id: 2
        },
        {
          id: 126,
          sprite_id: 43,
          tag_id: 23
        },
        {
          id: 127,
          sprite_id: 43,
          tag_id: 21
        },
        {
          id: 128,
          sprite_id: 44,
          tag_id: 4
        },
        {
          id: 129,
          sprite_id: 43,
          tag_id: 2
        },
        {
          id: 130,
          sprite_id: 44,
          tag_id: 23
        },
        {
          id: 131,
          sprite_id: 44,
          tag_id: 21
        },
        {
          id: 132,
          sprite_id: 45,
          tag_id: 3
        },
        {
          id: 133,
          sprite_id: 45,
          tag_id: 13
        },
        {
          id: 134,
          sprite_id: 45,
          tag_id: 4
        },
        {
          id: 135,
          sprite_id: 45,
          tag_id: 23
        },
        {
          id: 136,
          sprite_id: 45,
          tag_id: 21
        },
        {
          id: 137,
          sprite_id: 46,
          tag_id: 4
        },
        {
          id: 138,
          sprite_id: 46,
          tag_id: 6
        },
        {
          id: 139,
          sprite_id: 46,
          tag_id: 9
        },
        {
          id: 140,
          sprite_id: 46,
          tag_id: 23
        },
        {
          id: 141,
          sprite_id: 46,
          tag_id: 21
        },
        {
          id: 142,
          sprite_id: 1,
          tag_id: 21
        },
        {
          id: 143,
          sprite_id: 2,
          tag_id: 21
        },
        {
          id: 144,
          sprite_id: 3,
          tag_id: 21
        },
        {
          id: 145,
          sprite_id: 4,
          tag_id: 21
        },
        {
          id: 146,
          sprite_id: 5,
          tag_id: 21
        },
        {
          id: 147,
          sprite_id: 6,
          tag_id: 21
        },
        {
          id: 148,
          sprite_id: 7,
          tag_id: 21
        },
        {
          id: 149,
          sprite_id: 8,
          tag_id: 21
        },
        {
          id: 150,
          sprite_id: 9,
          tag_id: 21
        },
        {
          id: 151,
          sprite_id: 10,
          tag_id: 21
        },
        {
          id: 152,
          sprite_id: 11,
          tag_id: 21
        },
        {
          id: 153,
          sprite_id: 12,
          tag_id: 23
        },
        {
          id: 154,
          sprite_id: 13,
          tag_id: 23
        },
        {
          id: 155,
          sprite_id: 14,
          tag_id: 23
        },
        {
          id: 156,
          sprite_id: 15,
          tag_id: 23
        },
        {
          id: 157,
          sprite_id: 16,
          tag_id: 23
        },
        {
          id: 158,
          sprite_id: 17,
          tag_id: 23
        },
        {
          id: 159,
          sprite_id: 18,
          tag_id: 23
        },
        {
          id: 160,
          sprite_id: 19,
          tag_id: 23
        },
        {
          id: 161,
          sprite_id: 16,
          tag_id: 5
        },
        {
          id: 162,
          sprite_id: 36,
          tag_id: 21
        },
        {
          id: 163,
          sprite_id: 37,
          tag_id: 13
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sprites_tags_id_seq', (SELECT MAX(id) FROM sprites_tags));")
    });
};
