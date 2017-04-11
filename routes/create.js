const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
  res.render('create');
});

router.get('/createSprite', (req, res, next) => {
  res.render('createSprite');
})

module.exports = router;
