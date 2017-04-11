const express = require('express');
const router = express.Router();
let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};
router.get('/', (req,res,next) => {
  res.render('create');
});

router.get('/createSprite', (req, res, next) => {
  res.render('createSprite');
})

module.exports = router;
