var createError = require('http-errors');
var express = require('express');
var path = require('path');
const hbs = require('hbs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter=require('./routes/register')
var loginRouter=require('./routes/login')
var analyticsRouter=require('./routes/analytics')
var settingsRouter=require('./routes/settings')
var dashboardRouter=require('./routes/dashboard')
var logoutRouter=require('./routes/logout')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});
hbs.registerHelper('isActive', function (currentPath, matchPath) {
  return currentPath === matchPath ? 'active' : '';
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard/settings',settingsRouter);
app.use('/dashboard/analytics',analyticsRouter);
app.use('/dashboard',dashboardRouter);
app.use('/register',registerRouter)
app.use('/login',loginRouter)
app.use('/logout',logoutRouter)
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
  res.render('error', {
    layout: false,
    message: err.message,
    error: err
  });
});

module.exports = app;
