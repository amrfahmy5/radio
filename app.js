var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');


var usersRouter = require('./routes/user');
var programRouter = require('./routes/program');
var episodeRouter = require('./routes/episode');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');
var indexRouter = require('./routes/index');
var miniRadio = require('./routes/miniRadio')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'UserLayout',
  partialsDir: __dirname + '/views/partials/'
  }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({secret:'secret',resave:true ,saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.json());

//----------------passport-------------------
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/program', programRouter);
app.use('/episode', episodeRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/miniRadio', miniRadio);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
