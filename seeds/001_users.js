exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'SwampL0rd',
          hashed_password: '$2a$12$8ySbEBHPO4X9v16uHICZbuldkeRVLazWRma827.sduIE5RSHHa9w6',
          email: 'thisIsMySwamp@farquad.net',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Shrek.png',
          user_summary: "Who could ever love something as hideous as an ogre?"
        },
        {
          id: 2,
          username: 'Beard',
          hashed_password: '$2a$12$SL1kXit4vaVmIizz.cEipevyVGU/VgV4RWB68ygaika6B3/AsqYhG',
          email: 'gingerDudeWithBeard@hotline.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Beard.png',
          user_summary: "No need to thank me, kid, it's on the house."
        },
        {
          id: 3,
          username: 'Christian',
          hashed_password: '$2a$12$.iBTd.223O/LDRua9fVDoutqvnPo7cwfr/cAAJCgTcfXRsXoySXiS',
          email: 'Christain@biz.gov',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Christian.png',
          user_summary: "My name is Christian and I love to code"
        },
        {
          id: 4,
          username: 'SnakeFace',
          hashed_password: '$2a$12$J1CWK1YjmLJv6GvnVcetDu7jDzwk4E0oXYD9rdZcGA6R8pvqQ1JlG',
          email: 'CreepLord@slither.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Dicknoze.png',
          user_summary: "I live in the sewers, waiting for my time to strike"
        },
        {
          id: 5,
          username: 'TheSon',
          hashed_password: '$2a$12$Ka9hBUojc61.lZd8Q2gP.OhY1FT6Cag06SLtHHX3aU/4q7er54xEO',
          email: 'GottaGetAGrip@hotline.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/GetAGrip.png',
          user_summary: "Gotta Get A Grip! AHHHHHH!"
        },
        {
          id: 6,
          username: 'Grace',
          hashed_password: '$2a$12$Wvjo2aWIaX3kGOwEpBORguwvURFQkrOuZDVZgj6RDET2BQw0mptda',
          email: 'GraceLi@biz.gov',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Grace.png',
          user_summary: "My name is Grace and I love to code"
        },
        {
          id: 7,
          username: 'Richard',
          hashed_password: '$2a$12$rLZyPB77/vvFH./7J8Fgs.o8qxAjv7unLotQNqLiA5UdJoXLjzS1W',
          email: 'RoosterMask@hotline.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Richard.png',
          user_summary: "We are all animals on the inside"
        },
        {
          id: 8,
          username: 'Richter',
          hashed_password: '$2a$12$qgSEHLeszATamjLItnRQe.aucpBsOiqxGTDoFswwG/TbW9CW4Oo4.',
          email: 'RatMask@hotline.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/richter_shades.png',
          user_summary: "I'm taking my Mom on a vacation, shes the best!"
        },
        {
          id: 9,
          username: 'TomCon',
          hashed_password: '$2a$12$fIt0iM56PAFg344GXvIc..5GRxwollJdKdUaivbC2pR1IRWnJRlSu',
          email: 'TomCon@biz.gov',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/TomCon.png',
          user_summary: "My name is Tom and I love to code"
        },
        {
          id: 10,
          username: 'Tony',
          hashed_password: '$2a$12$mErhITpReKsv08nkXa4EeuPzbUca8/BKLxiQustZ9dVo9LILlKmni',
          email: 'TigerMask@hotline.com',
          archived_account: false,
          user_picture:'/images/uploads/seed_Profile_pictures/Tony.png',
          user_summary: "I just want to punch God in the face"
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
