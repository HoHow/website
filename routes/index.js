var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',function(req, res, next){
  
});

module.exports = router;