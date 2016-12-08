var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var backdata = require('../controller/backdata');
var router = express();

router.post('/',function(req, res, next){
  var url = req.body.url;
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  
    backdata(body,function(err,body){
      res.json(err?400:200,body);
    });

  }
})
});

module.exports = router;