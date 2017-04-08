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
          archived_account: false
        },
        {
          id: 2,
          username: 'dietSprite',
          hashed_password: '$2a$12$SL1kXit4vaVmIizz.cEipevyVGU/VgV4RWB68ygaika6B3/AsqYhG',
          email: 'iceinmysprite@hotmail.com',
          archived_account: false
        },
        {
          id: 3,
          username: 'jimmyBigSprites',
          hashed_password: '$2a$12$.iBTd.223O/LDRua9fVDoutqvnPo7cwfr/cAAJCgTcfXRsXoySXiS',
          email: 'jimmythespritegod@hotmail.com',
          archived_account: false
        },
        {
          id: 4,
          username: 'dalesDimmaDOME',
          hashed_password: '$2a$12$J1CWK1YjmLJv6GvnVcetDu7jDzwk4E0oXYD9rdZcGA6R8pvqQ1JlG',
          email: 'richcowboy@hotmail.com',
          archived_account: false
        },
        {
          id: 5,
          username: 'winter',
          hashed_password: '$2a$12$Ka9hBUojc61.lZd8Q2gP.OhY1FT6Cag06SLtHHX3aU/4q7er54xEO',
          email: 'winter@hotmail.com',
          archived_account: false
        },
        {
          id: 6,
          username: 'senpai',
          hashed_password: '$2a$12$Wvjo2aWIaX3kGOwEpBORguwvURFQkrOuZDVZgj6RDET2BQw0mptda',
          email: 'noticeme@hotmail.com',
          archived_account: false
        },
        {
          id: 7,
          username: '360noScope',
          hashed_password: '$2a$12$rLZyPB77/vvFH./7J8Fgs.o8qxAjv7unLotQNqLiA5UdJoXLjzS1W',
          email: '1v1meKid@hotmail.com',
          archived_account: false
        },
        {
          id: 8,
          username: 'RandyBoBandy',
          hashed_password: '$2a$12$qgSEHLeszATamjLItnRQe.aucpBsOiqxGTDoFswwG/TbW9CW4Oo4.',
          email: 'mallcop@hotmail.com',
          archived_account: false
        },
        {
          id: 9,
          username: 'NSAagent',
          hashed_password: '$2a$12$fIt0iM56PAFg344GXvIc..5GRxwollJdKdUaivbC2pR1IRWnJRlSu',
          email: 'iworkforthensa@hotmail.com',
          archived_account: false
        },
        {
          id: 10,
          username: 'gamerXgirl',
          hashed_password: '$2a$12$mErhITpReKsv08nkXa4EeuPzbUca8/BKLxiQustZ9dVo9LILlKmni',
          email: 'doritos@hotmail.com',
          archived_account: false
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
