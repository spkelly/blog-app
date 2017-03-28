var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res) {
  //get all
  let feed = knex('posts').innerJoin('users','posts.user_id','users.id').then((result) => {
      // for (i = 0; i < result.length; i++) {
      //   let title = result[i].title
      //   let author = result[i].users_id
      //   let body = result[i].body
      // }
      result = JSON.stringify(result);
      res.render('index', {
        home: result
      });

  });
});

router.use('/newuser', (err,req,res,next) =>{
  if (err) {
    console.log(err);
  }
  res.render('newuser');
})

router.get('/posts/:id', function(req, res){
    //get blog data from db
    let id = req.params.id;
    console.log(id);
    knex('posts').where('posts.id',id).then((post) => {
      console.log(post);
      knex('comments').where('comments.post_id',post[0].id).then((comment) =>{
        console.log('comments',comment);
        res.render('fullpage', {post: post[0],comments:comment});
      })
    });
    let comments = knex('comments').where('comments.post_id', id).then((result) => {
    console.log(result);
    });

});

router.post('/', function(req, res){
});
module.exports = router;
