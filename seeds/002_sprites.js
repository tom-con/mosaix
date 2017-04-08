exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprites').del()
    .then(function() {
      // Inserts seed entries
      return knex('sprites').insert(
        [{
            id: 1,
            name: "Goth Bob",
            user_id: 10,
            render_url: 'http://orig01.deviantart.net/fb37/f/2016/340/b/f/doodlebob_sprite_by_theblazepage-dajjcj3.png',
            archived_sprite: false
          },
          {
            id: 2,
            name: "Don't miss the bus!",
            user_id: 1,
            render_url: 'http://4.bp.blogspot.com/-3zemaTY_N2A/UH_LlmyrFTI/AAAAAAAAAI0/jKiItuK2zoU/s1600/aku2c.png',
            archived_sprite: false
          },
          {
            id: 3,
            name: "You're out of toilet paper dude",
            user_id: 3,
            render_url: 'http://files.gamebanana.com/img/ico/sprays/mummy.gif',
            archived_sprite: false
          },
          {
            id: 4,
            name: "Hover Boss",
            user_id: 2,
            render_url: 'https://gbatemp.net/attachments/rob2-png.3622/',
            archived_sprite: false
          },
          {
            id: 5,
            name: "Darth Vader Saber Stab",
            user_id: 9,
            render_url: 'http://orig11.deviantart.net/6044/f/2015/041/a/1/mini_darth_vader_pixel_art_by_spartannjones-d8hfq3g.png',
            archived_sprite: false
          },
          {
            id: 6,
            name: "Gogeta Super Sayan Quatro",
            user_id: 6,
            render_url: 'http://pixelart.studio/Gallery/Image/6f9180cb-cbb9-4f22-bc54-067a1c219435?type=png',
            archived_sprite: false
          },
          {
            id: 7,
            name: "DOTA 2 Juggernaut",
            user_id: 8,
            render_url: 'http://orig08.deviantart.net/e84a/f/2015/044/0/2/dota_2_juggernaut___pixel_art_by_xxmur0xx-d8ht0kx.png',
            archived_sprite: false
          },
          {
            id: 8,
            name: "TF2",
            user_id: 9,
            render_url: 'http://i.imgur.com/htO6Qs4.png',
            archived_sprite: false
          },
          {
            id: 9,
            name: "Sakura",
            user_id: 5,
            render_url: 'http://2.bp.blogspot.com/-YUsMJZKK-QY/Udjj4bpHJSI/AAAAAAAAMhI/uSCTiEF31zQ/s1600/pink_weeping_cherry_tree_in_bloom.png',
            archived_sprite: false
          },
          {
            id: 10,
            name: "Dollars",
            user_id: 4,
            render_url: 'https://s-media-cache-ak0.pinimg.com/originals/67/3f/f9/673ff960ac09ef1f15d6c3dd05f8f73d.png',
            archived_sprite: false
          }
        ]);
    }).then(() => {
      return knex.raw("SELECT setval('sprites_id_seq', (SELECT MAX(id) FROM sprites));")
    });
};
