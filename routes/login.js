const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  console.log("logging in");
  res.redirect('/profile');
})

router.post('/signup', (req, res, next) => {
  console.log("logging in");
  res.redirect('/profile');
})

module.exports = router;
