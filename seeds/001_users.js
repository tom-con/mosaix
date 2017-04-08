exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'spriteLiker22',
          hashed_password: '$2a$12$8ySbEBHPO4X9v16uHICZbuldkeRVLazWRma827.sduIE5RSHHa9w6',
          email: 'imakesprites@hotmail.com',
          archived_account: false,
          user_picture:'https://usatftw.files.wordpress.com/2014/10/usp-nba_-new-york-knicks-at-cleveland-cavaliers_009.jpg?w=1000&h=600&crop=1',
          user_summary: "This is a place holder for now"
        },
        {
          id: 2,
          username: 'dietSprite',
          hashed_password: '$2a$12$SL1kXit4vaVmIizz.cEipevyVGU/VgV4RWB68ygaika6B3/AsqYhG',
          email: 'iceinmysprite@hotmail.com',
          archived_account: false,
          user_picture:'http://www.xxlmag.com/files/2017/02/Lil-Yachty-1.jpg',
          user_summary: "This is a place holder for now"
        },
        {
          id: 3,
          username: 'jimmyBigSprites',
          hashed_password: '$2a$12$.iBTd.223O/LDRua9fVDoutqvnPo7cwfr/cAAJCgTcfXRsXoySXiS',
          email: 'jimmythespritegod@hotmail.com',
          archived_account: false,
          user_picture:'http://images.buycostumes.com/mgen/merchandiser/10219.jpg?zm=1600,1600,1,0,0',
          user_summary: "This is a place holder for now"
        },
        {
          id: 4,
          username: 'dalesDimmaDOME',
          hashed_password: '$2a$12$J1CWK1YjmLJv6GvnVcetDu7jDzwk4E0oXYD9rdZcGA6R8pvqQ1JlG',
          email: 'richcowboy@hotmail.com',
          archived_account: false,
          user_picture:'http://images.costumeexpress.com/mgen/inflatable-cowboy-hat-cx-809078.jpg?zm=1600,1600,1,0,0',
          user_summary: "This is a place holder for now"
        },
        {
          id: 5,
          username: 'winter',
          hashed_password: '$2a$12$Ka9hBUojc61.lZd8Q2gP.OhY1FT6Cag06SLtHHX3aU/4q7er54xEO',
          email: 'winter@hotmail.com',
          archived_account: false,
          user_picture:'https://media.tenor.co/images/aed4c426df300d3f417184c6e295bea1/tenor.gif',
          user_summary: "This is a place holder for now"
        },
        {
          id: 6,
          username: 'senpai',
          hashed_password: '$2a$12$Wvjo2aWIaX3kGOwEpBORguwvURFQkrOuZDVZgj6RDET2BQw0mptda',
          email: 'noticeme@hotmail.com',
          archived_account: false,
          user_picture:'https://static1.squarespace.com/static/52293fbde4b054f0e184d15f/55768047e4b03d1ffbe5a477/56b14b8b2eeb8185d46180d4/1454459788011/CRUX-WEB-bobby-hill_stickers.jpg?format=750w',
          user_summary: "This is a place holder for now"
        },
        {
          id: 7,
          username: '360noScope',
          hashed_password: '$2a$12$rLZyPB77/vvFH./7J8Fgs.o8qxAjv7unLotQNqLiA5UdJoXLjzS1W',
          email: '1v1meKid@hotmail.com',
          archived_account: false,
          user_picture:'http://mlgflappybird420.com/images/bannercalc.jpg',
          user_summary: "This is a place holder for now"
        },
        {
          id: 8,
          username: 'RandyBoBandy',
          hashed_password: '$2a$12$qgSEHLeszATamjLItnRQe.aucpBsOiqxGTDoFswwG/TbW9CW4Oo4.',
          email: 'mallcop@hotmail.com',
          archived_account: false,
          user_picture:'https://s-media-cache-ak0.pinimg.com/564x/a6/0d/4b/a60d4bb0df845fc77f910898d42bfd75.jpg',
          user_summary: "This is a place holder for now"
        },
        {
          id: 9,
          username: 'NSAagent',
          hashed_password: '$2a$12$fIt0iM56PAFg344GXvIc..5GRxwollJdKdUaivbC2pR1IRWnJRlSu',
          email: 'iworkforthensa@hotmail.com',
          archived_account: false,
          user_picture:'https://pbs.twimg.com/media/B_hD9CzWAAEQQH5.jpg',
          user_summary: "This is a place holder for now"
        },
        {
          id: 10,
          username: 'gamerXgirl',
          hashed_password: '$2a$12$mErhITpReKsv08nkXa4EeuPzbUca8/BKLxiQustZ9dVo9LILlKmni',
          email: 'doritos@hotmail.com',
          archived_account: false,
          user_picture:'http://i.imgur.com/LhIaUAv.jpg',
          user_summary: "This is a place holder for now"
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
