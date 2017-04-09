const jwt = require('jsonwebtoken');


let makeJWT = (user) => {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, process.env.JWT_SECRET);
}


module.exports.makeJWT = makeJWT;
