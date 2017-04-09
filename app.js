const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload');
dotenv.load();

const index = require('./routes/index');
const profile = require('./routes/profile');
const login = require('./routes/login');
const sprite = require('./routes/sprite');
const users = require('./routes/users');
const tags = require('./routes/tags');
const create = require('./routes/create');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// File upload
app.use(fileUpload({ safeFileNames: true }));


app.use('/', index);
app.use('/login', login);
app.use('/profile', profile);
app.use('/sprite', sprite);
app.use('/users', users);
app.use('/tags', tags);
app.use('/create', create);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
