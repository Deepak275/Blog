var express = require('express');
var router = express.Router();
var homePage = require('./index');
var fs = require('fs');
var bloggers = require('../BlogContent');
var jsonfile = require('jsonfile');
var path = require('path');
/* GET users listing. */
// router.get('/', function (req, res, next) {
//   console.log("in the create middle");
//   return res.render('create');
// });

exports.create = function (req, res, next) {
  console.log("in the create middle");
  return res.render('create');
}

exports.saveBlog =  function (req, res, next) {
  console.log("In the post request method !!");
  // console.log(req.body.title);
  var obj = {
    "title":req.body.title,
    "topic":req.body.topic,
    "author":req.body.author,
    "time":(new Date()).getUTCMonth()+'-'+(new Date()).getUTCDate()+'-'+(new Date()).getUTCFullYear(),
    "body":req.body.content,
    "no": bloggers.length

  }

  // jsonfile.writeFile('../textFILE.json', obj)
  console.log('new obj', obj);
  // var file = path.join(__dirname, '../BlogContent.json');
  var file = path.join(__dirname, '../BlogContent.json');
  console.log(file);
  fs.readFile(file, function(err, data) {
      if (err) {
        console.error('error ',err);
        process.exit(1);
      }
      //console.log(data.toString());
      var blogs = JSON.parse(data);
      console.log('new blog object',obj);

      blogs.push(obj);
      fs.writeFile(file, JSON.stringify(blogs, null, 4), function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }

      });
    });

  console.log('in the ');
  return next();

}
//   var obj = req.body.title + req.body.topic;
// console.log(obj);
// var logStream = fs.createWriteStream('bloggers', {'flags': 'a'});
// console.log('writestream');
// logStream.write('/');
// logStream.end();
  // fs.appendFileSync('bloggers', 'dadsf')
  // function (err) {
  //   if (err) {
  //     return next(err);
  //   }
  //   console.log('file is appended');
  //
  // })

  // return homePage.getHomePage(res);


// module.exports = router;

// module.exports = function (req, res, next) {
//   console.log("in the create middle");
//   res.render('create');
//   next();
//  }
