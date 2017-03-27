var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  //get all
  res.render('posts', {message: "This is our feed page"});
});

router.get('/:id', function(req, res){
  //get blog data from db
  res.render('fullpage', {message: "This is our individual post and comment page"});
});

router.post('/', function(req, res){
});
module.exports = router;
