var express = require('express');
var request = require('request');
var router = express();

router.post('/',function(req, res, next){
  var url = req.body.url;
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
});

module.exports = router;