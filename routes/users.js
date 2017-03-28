var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  let id = req.params.id;
  console.log(id);
  console.log("in here");

  res.render('profile');
  // knex('users').where('users.id', id).then((user) =>{
  //   r
  // });
});

router.post('/', (req,res,next) =>{
  let username = req.body.username;
  let email = req.body.email;

  if(!username || !email){
    throw new Error('not found');
  }
  else {
    knex('users').insert({
      username: username,
      email: email
    })
    .then((data) => {
      console.log(data);
    });
  }
});

module.exports = router;
