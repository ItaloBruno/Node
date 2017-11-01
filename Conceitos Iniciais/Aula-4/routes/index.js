var express = require('express');
var router = express.Router();
var model = require('./../model/tasks')();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null, (err, tasks)=>{
    if(err)
      throw err;
    
    res.render('index', { title: 'Express',tasks: tasks});
  });
  
});

module.exports = router;
