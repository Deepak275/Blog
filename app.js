var express = require('express');
var path = require('path');
var fs = require('fs');

// var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var createBlog = require('./routes/create');

var app = express();
// var template =
//var templateFile = path.join(__dirname,'template/index.html');
// console.log(templateFile);
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  app.all('*', function (req, res, next) {
//   fs.readFile(templateFile, function (err, data) {
//     if (err) {
//       console.error(err);
//       return next();
//     }
//     //console.log(data.toString(),'utf-8');
//     return res.send(data.toString());
//   })
// });

 //routes.test.print(5);

app.get('/', index.getHomePage);
app.get('/getBlog', index.getBlog)
app.get('/create', createBlog.create);
app.post('/create', createBlog.saveBlog, index.getHomePage)
//app.use('/publish', createBlog);

console.log("bypassing the createBlog");
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
