var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  res.render('index', {message: "This is user page"});
});

module.exports = router;
