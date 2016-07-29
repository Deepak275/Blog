var express = require('express');
var bloggers = require('../BlogContent');

//var router = express.Router();
var Blogger;
/* GET home page. */
exports.getHomePage =  function(req, res, next) {
  // console.log('in the get mehtod middleware !!', req.query.no);
  console.log('in the gethome', req.body, req.query);
  //console.log("data :: ", bloggers);
  if (true) {
      var bloggerDetails = bloggers.map(function (obj) {
      var bDetails = {};
      bDetails["title"] = obj.title;
      bDetails["time"] = obj.time;
      bDetails["no"] = obj.no;
      return bDetails;
    });
    //console.log(bloggerDetails);
  return res.render('index', { Blogger : bloggerDetails });
  } else {
    next();
  }
}

exports.getBlog = function (req, res, next) {
  console.log('In the get blog');
  if (req.query.no >= 0) {
    Blogger = bloggers[req.query.no];
    console.log(Blogger);
     return res.render('blog', { Blogger : Blogger });
   } else {
     var error = new Error('Blog is not found !!');
     error.status = 404;
     return next(error);
   }

}











  //console.log(Object.keys(req));
  //   getHomePage(req, res)
  //   console.log(req.query.no);
  //   return next();
  // console.log('query page', req.query.no);
  // console.log(Blogger);
  // res.render('blog', { Blogger : Blogger });



  // Used for rendering the the jade template
  // input  (type = "button", value = "Next Blog", action = "http://localhost:3000/?q=#{Blogger.no + 1}")
  //res.write({Blogger : Blogger});
  // res.writeHead(200,
  //    {
  //   'content-type': 'application/json'
  //
  // });
  // console.log(Blogger);
  //res.send(Blogger);





// exports.test = {
//   //var t = 2,
//
//    print: function (key) {
//     console.log(key)
//   }
// }

//module.exports =


/*

a(style = "text-decoration:none", href = "/?page=#{Blogger.no - 1}") Prev Blog &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp
a(style = "text-decoration:none", href = "/?page=#{Blogger.no + 1}") Next Blog

fieldset
    article
    header
      h3 Name : #{Blogger.name}
      h3 Time : #{Blogger.time}
fieldset
    article
    header
      h3 Name : #{Blogger.name}
      h3 Time : #{Blogger.time}
fieldset
    article
    header
      h3 Name : #{Blogger.name}
      h3 Time : #{Blogger.time}

*/
// router.get('/create', function (req, res, next) {
//   console.log("in the create middleware");
//   res.render('create');
//   next()
// })


// router.delete('/', function (req, res, next) {
//   next();
// });



// ***********  index.jade layout
/*
    -var i = 0
    each index in  Blogger
          fieldset(style = "margin-top: 20px")
            article
              a(style = "text-decoration: none", href = "/getBlog/?no=#{index.no}")
                header
                  h3 Name : #{index.name}
                  h3 Time : #{index.time}

              -i++  // "-" is used to not let ++ to get display


*/
//exports.router =  router;
