var express = require('express');
var router = express.Router();
var homePage = require('./index');
var fs = require('fs');
var bloggers = require('../BlogContent');
var jsonfile = require('jsonfile');
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
    "name":req.body.title,
    "time":(new Date()).getUTCMonth()+'-'+(new Date()).getUTCDate()+'-'+(new Date()).getUTCFullYear(),
    "body":req.body.content,
    "no": bloggers.length

  }

  jsonfile.writeFile('../textFILE.json', obj)
  console.log('in the ');
  return next();
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

}

// module.exports = router;

// module.exports = function (req, res, next) {
//   console.log("in the create middle");
//   res.render('create');
//   next();
//  }
