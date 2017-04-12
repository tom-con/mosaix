exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprites').del()
    .then(function() {
      // Inserts seed entries
      return knex('sprites').insert(
        [{
            id: 1,
            name: "Blue+Brown Triangles",
            user_id: 1,
            description: 'Blue and Brown triangles I made for my triangle series',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Brown_Blue_Triangles.png',
            archived_sprite: false
          },
          {
            id: 2,
            name: "Blue+Gold Triangles",
            user_id: 1,
            description: 'Blue and Gold triangles I made for my triangle series',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Gold_Blue_Triangles.png',
            archived_sprite: false
          },
          {
            id: 3,
            name: "Blue+Green Triangles",
            user_id: 1,
            description: 'Blue and Green triangles I made for my triangle series',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Green_Blue_Triangles.png',
            archived_sprite: false
          },
          {
            id: 4,
            name: "Green+Purple Triangles",
            user_id: 1,
            description: 'Green and Purple triangles I made for my triangle series',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Green_Purp_Triangles.png',
            archived_sprite: false
          },
          {
            id: 5,
            name: "Lime+Pink Triangles",
            user_id: 1,
            description: 'Pink and Lime triangles I made for my triangle series... this one has bold colors but I think it is a bit too much',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Lime_Pink_Triangles.png',
            archived_sprite: false
          },
          {
            id: 6,
            name: "Navy+Brown Triangles",
            user_id: 1,
            description: 'Navy and Brown triangles I made for my triangle series, I dig on this color pairing, more to come',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Navy_Brown_Triangles.png',
            archived_sprite: false
          },
          {
            id: 7,
            name: "Oarnge+Yellow Triangles",
            user_id: 1,
            description: 'Yellow and Oarnge triangles I made for my triangle series. I really like the color pairing but I\'m not sure where it fits with my current projects',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Oarnge_Yellow_Triangles.png',
            archived_sprite: false
          },
          {
            id: 8,
            name: "Pink+Black Triangles",
            user_id: 1,
            description: 'Pink and Black triangles I made for my triangle series',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Pink_Black_Triangles.png',
            archived_sprite: false
          },
          {
            id: 9,
            name: "Purple+Purple Triangles",
            user_id: 1,
            description: 'Purple triangles I made for my triangle series... I thought they were a nice color match',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Purple_Purple_Triangles.png',
            archived_sprite: false
          },
          {
            id: 10,
            name: "Green+Pink Triangles",
            user_id: 1,
            description: 'Green and Pink triangles I made for my triangle series, I dislike the green on this a lot, will probably never use this shade of green again',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/Vomit_Pink_Triangles.png',
            archived_sprite: false
          },
          {
            id: 11,
            name: "White+Purple Triangles",
            user_id: 1,
            description: 'White and Purple triangles I made for my triangle series. I like the sharp color contrast, more to come later',
            render_url: '/images/uploads/seed_Square_PNG/2Color_Triangles/White_Purple_Triangles.png',
            archived_sprite: false
          },
          {
            id: 12,
            name: "Blue Smile",
            user_id: 2,
            description: 'Blue Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Blue_Smile.png',
            archived_sprite: false
          },
          {
            id: 13,
            name: "Green Smile",
            user_id: 2,
            description: 'Green Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Green_Smile.png',
            archived_sprite: false
          },
          {
            id: 14,
            name: "Oarnge Smile",
            user_id: 2,
            description: 'Oarnge Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Oarnge_Smile.png',
            archived_sprite: false
          },
          {
            id: 15,
            name: "Pink Smile",
            user_id: 2,
            description: 'Pink Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Pink_Smile.png',
            archived_sprite: false
          },
          {
            id: 16,
            name: "Purple Smile",
            user_id: 2,
            description: 'Purple Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Purple_Smile.png',
            archived_sprite: false
          },
          {
            id: 17,
            name: "Red Smile",
            user_id: 2,
            description: 'Red Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Red_Smile.png',
            archived_sprite: false
          },
          {
            id: 18,
            name: "White Smile",
            user_id: 2,
            description: 'White Smiley Face',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/White_Smile.png',
            archived_sprite: false
          },
          {
            id: 19,
            name: "Yellow Smile",
            user_id: 2,
            description: 'Yellow Smiley Face, \"Watchmen\" anybody?',
            render_url: '/images/uploads/seed_Square_PNG/Color_Smile/Yellow_Smile.png',
            archived_sprite: false
          },
          {
            id: 20,
            name: "$TACKS",
            user_id: 3,
            description: 'I just wanna thank my Mom for giving me the time on this earth to make so much many $tacks',
            render_url: '/images/uploads/seed_Square_PNG/Text/Christian_Text.png',
            archived_sprite: false
          },
          {
            id: 21,
            name: "DANGER",
            user_id: 4,
            description: 'Who are you talking to right now? Who is it you think you see? Do you know how much I make a year? I mean, even if I told you, you wouldn\'t believe it. Do you know what would happen if I suddenly decided to stop going into work? A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don\'t know who you\'re talking to, so let me clue you in. I am not in danger, Skyler. I AM THE DANGER. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!',
            render_url: '/images/uploads/seed_Square_PNG/Text/Kevin_Text.png',
            archived_sprite: false
          },
          {
            id: 22,
            name: "Black Danger",
            user_id: 5,
            description: 'Black caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Black_Danger.png',
            archived_sprite: false
          },
          {
            id: 23,
            name: "Blue Danger",
            user_id: 5,
            description: 'Blue caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Blue_Danger.png',
            archived_sprite: false
          },
          {
            id: 24,
            name: "Green Danger",
            user_id: 5,
            description: 'Green caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Green_Danger.png',
            archived_sprite: false
          },
          {
            id: 25,
            name: "Oarnge Danger",
            user_id: 5,
            description: 'Oarnge caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Oarnge_Danger.png',
            archived_sprite: false
          },
          {
            id: 26,
            name: "Pink Danger",
            user_id: 5,
            description: 'Pink caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Pink_Danger.png',
            archived_sprite: false
          },
          {
            id: 27,
            name: "Teal Danger",
            user_id: 5,
            description: 'Teal caution logo I made for current project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Teal_Danger.png',
            archived_sprite: false
          },
          {
            id: 28,
            name: "White Danger",
            user_id: 5,
            description: 'White and Black caution logo I made for current project, cool inverted scheme from the Black Danger I made a while back',
            render_url: '/images/uploads/seed_Square_PNG/Danger/White_Danger.png',
            archived_sprite: false
          },
          {
            id: 29,
            name: "Yellow Danger",
            user_id: 5,
            description: 'Yellow caution logo I made for current project, probably my favorite for the construction map project',
            render_url: '/images/uploads/seed_Square_PNG/Danger/Yellow_Danger.png',
            archived_sprite: false
          },
          {
            id: 30,
            name: "Crazy!",
            user_id: 6,
            description: 'It comes in the family',
            render_url: '/images/uploads/seed_Square_PNG/Text/Grace_Text.png',
            archived_sprite: false
          },
          {
            id: 31,
            name: "Black",
            user_id: 7,
            description: 'Just solid black',
            render_url: '/images/uploads/seed_Square_PNG/Mono/Black_Mono.png',
            archived_sprite: false
          },
          {
            id: 32,
            name: "Blue",
            user_id: 7,
            description: 'Solid Blue',
            render_url: '/images/uploads/seed_Square_PNG/Mono/Blue_Mono.png',
            archived_sprite: false
          },
          {
            id: 33,
            name: "Crimson",
            user_id: 7,
            description: 'How do I add a description?',
            render_url: '/images/uploads/seed_Square_PNG/Mono/Crimson_Mono.png',
            archived_sprite: false
          },
          {
            id: 34,
            name: "Navy",
            user_id: 7,
            description: 'Test1',
            render_url: '/images/uploads/seed_Square_PNG/Mono/Navy_Mono.png',
            archived_sprite: false
          },
          {
            id: 35,
            name: "Salmon",
            user_id: 7,
            description: 'Mostly Pink... kinda red?',
            render_url: '/images/uploads/seed_Square_PNG/Mono/Salmon_Mono.png',
            archived_sprite: false
          },
          {
            id: 36,
            name: "Black+Purple Squares",
            user_id: 8,
            description: 'Pink and black squares for rug idea',
            render_url: '/images/uploads/seed_Square_PNG/Squares/Black_Purple_Squares.png',
            archived_sprite: false
          },
          {
            id: 37,
            name: "Blue+Yellow Squares",
            user_id: 8,
            description: 'Yellow and blue squares with a black outline',
            render_url: '/images/uploads/seed_Square_PNG/Squares/Blue_Yellow_Squares.png',
            archived_sprite: false
          },
          {
            id: 38,
            name: "Pink+Yellow+Black+Green Squares",
            user_id: 8,
            description: 'Experimenting with colors and outline size/need for the square project',
            render_url: '/images/uploads/seed_Square_PNG/Squares/Pink_Black_Green_Yellow_Squares.png',
            archived_sprite: false
          },
          {
            id: 39,
            name: "Purple+Blue Squares",
            user_id: 8,
            description: 'Purple-ish blue squares with a black outline',
            render_url: '/images/uploads/seed_Square_PNG/Squares/Purple_Blue_Squares.png',
            archived_sprite: false
          },
          {
            id: 40,
            name: "Red+Green Squares",
            user_id: 8,
            description: 'Red and Green squares with black outline',
            render_url: '/images/uploads/seed_Square_PNG/Squares/Red_Green_Squares.png',
            archived_sprite: false
          },
          {
            id: 41,
            name: "Cool Guy!",
            user_id: 9,
            description: 'I\'m Tom and I am a super rad dude, check it out!',
            render_url: '/images/uploads/seed_Square_PNG/Text/TomC_Text.png',
            archived_sprite: false
          },
          {
            id: 42,
            name: "Blue+Blue Waves",
            user_id: 10,
            description: 'Blue on Blue Dartboard pattern, could make for some nice ripples or target icon. Feels like it belongs underwater, but might go somewhere else',
            render_url: '/images/uploads/seed_Square_PNG/Waves/Blue_Blue_Waves.png',
            archived_sprite: false
          },
          {
            id: 43,
            name: "Red+Blue Waves",
            user_id: 10,
            description: 'Red and blue wave serries, was playing around with the formating. Needs a skull or other logo overtop to make a Greatful Dead logo',
            render_url: '/images/uploads/seed_Square_PNG/Waves/Blue_Red_Waves.png',
            archived_sprite: false
          },
          {
            id: 44,
            name: "Green+Blue Waves",
            user_id: 10,
            description: 'Green and Blue and Aqua pattern',
            render_url: '/images/uploads/seed_Square_PNG/Waves/Green_Blue_Waves.png',
            archived_sprite: false
          },
          {
            id: 45,
            name: "Gold+Green Waves",
            user_id: 10,
            description: 'Green and gold dartboard',
            render_url: '/images/uploads/seed_Square_PNG/Waves/Green_Gold_Waves.png',
            archived_sprite: false
          },
          {
            id: 46,
            name: "Pink+Green+White Waves",
            user_id: 10,
            description: 'Playing around with different colors, I like how distinct all the fields are, but I\'m not sold on the color matching',
            render_url: '/images/uploads/seed_Square_PNG/Waves/Green_Pink_White_Waves.png',
            archived_sprite: false
          }
        ]);
    }).then(() => {
      return knex.raw("SELECT setval('sprites_id_seq', (SELECT MAX(id) FROM sprites));")
    });
};
