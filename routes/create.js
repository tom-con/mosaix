const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

router.get('/', (req,res,next) => {
  res.render('create');
})

router.post('/', (req, res, next) => {
  if (req.cookies.token) {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    let id = decoded.id;
    if (req.files.picture_url.mimetype === 'image/png') {
      let picture_url = req.files.picture_url;
      picture_url.mv(`./public/images/uploads/sprites/${picture_url.name.replace(/png$/, ".png")}`, function(writeErr) {
        if (writeErr) {
          return res.status(500).send(err);
        } else {
          knex('sprites')
            .insert({
              render_url: `http://localhost:3000/images/uploads/sprites/${picture_url.name.replace(/png$/, ".png")}`,
              user_id: id,
              name: req.body.name
            })
            .then(() => {
              res.redirect(`/profile/${id}`);
            })
        }
      });
    }
  }
})


module.exports = router;
