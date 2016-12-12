var express = require('express');
var request = require('request');
var router = express();

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

// var geturl = require('./geturl');


console.log('api require');

router.get('/',function(req, res, next){
  res.send('respond with a resource');
});

// router.use('/geturl',geturl);

module.exports = router;