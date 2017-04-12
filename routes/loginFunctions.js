const jwt = require('jsonwebtoken');


let makeJWT = (user) => {
  return jwt.sign({
    id: user.id,
    username: user.username,
    picture: user.user_picture
  }, process.env.JWT_SECRET);
}

let authorized = (req, res, next) => {
  if(req.cookies.token){
    let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    req.locals = {
      user: decodedToken
    }
    next();
  } else {
    next('route');
  }
}


module.exports = {
  makeJWT: makeJWT,
  authorized: authorized
}
