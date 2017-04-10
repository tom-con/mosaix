const jwt = require('jsonwebtoken');


let makeJWT = (user) => {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, process.env.JWT_SECRET);
}

let authorized = (req, res, next) => {
  let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  if(req.cookies.token){
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
