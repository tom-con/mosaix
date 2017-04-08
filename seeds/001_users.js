exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'spriteLiker22',
          hashed_password: '$2a$12$7GJ5YsSLpd3OKka3OAmvAeZJRxn.BBFmxlbNxT4dxWYKT3jC7mAC.',
          email: 'imakesprites@hotmail.com',
          archived_account: false
        },
        {
          id: 2,
          username: 'dietSprite',
          hashed_password: '$2a$12$YZvrVD7u/d3E5ksE7jJCmu1oFC2oNTb2qwS1TXXqqEj1OnNKS2Ao6',
          email: 'iceinmysprite@hotmail.com',
          archived_account: false
        },
        {
          id: 3,
          username: 'jimmyBigSprites',
          hashed_password: '$2a$12$hex8B2ab.IdbVEea1yGFLe4QegITqV6GHssj.o7aCjq2zi1Lepv7a',
          email: 'jimmythespritegod@hotmail.com',
          archived_account: false
        },
        {
          id: 4,
          username: 'dalesDimmaDOME',
          hashed_password: '$2a$12$.4suZr02aKXfq.obPw/3xewF6/dnwo304fTSSo.BLmFa4O5NrHmPC',
          email: 'richcowboy@hotmail.com',
          archived_account: false
        },
        {
          id: 5,
          username: 'winter',
          hashed_password: '$2a$12$s3COXiDmLNRuQHy.jhGCF.U/uws.BxemwrRC/NeDX5Rgagz3lizBm',
          email: 'winter@hotmail.com',
          archived_account: false
        },
        {
          id: 6,
          username: 'senpai',
          hashed_password: '$2a$12$PUCD8IN.5WcYxej3K1L8qei9E9MCrq9998AD4ofS1AGZGAWvw0Veu',
          email: 'noticeme@hotmail.com',
          archived_account: false
        },
        {
          id: 7,
          username: '360noScope',
          hashed_password: '$2a$12$uHsmIoWJxqpPpv55ivFfuO.3mA0DDAWtWa55Lamx3HIPdTElgU8NK',
          email: '1v1meKid@hotmail.com',
          archived_account: false
        },
        {
          id: 8,
          username: 'RandyBoBandy',
          hashed_password: '$2a$12$W7O6eR7hS5EmrxGK2DrJ9uQ71g0i9E8qTc.ppJCeZDhie9WQcb6kq',
          email: 'mallcop@hotmail.com',
          archived_account: false
        },
        {
          id: 9,
          username: 'NSAagent',
          hashed_password: '$2a$12$CA89rYmfG/dIsdcE6WZirOTIBoWIRfOfFwsP072UqJkATeG.VVRVq',
          email: 'iworkforthensa@hotmail.com',
          archived_account: false
        },
        {
          id: 10,
          username: 'gamerXgirl',
          hashed_password: '$2a$12$/NOtWBGanZg8imWzO7C7yOw09youPlnnTQN1lmL4gyzmq2el05O.u',
          email: 'doritos@hotmail.com',
          archived_account: false
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
