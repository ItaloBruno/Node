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

router.post('/add', (req, res, next)=>{
  var body = req.body;
  body.status = false;
  model.create(body,(err, task) =>{
    if(err)
      throw err;
    res.redirect('/');
  });
});

router.get('/turn/:id', (req, res, next)=>{
  var id = req.params.id;
  model.findById(id, (err, task)=>{
    if(err)
      throw err;
    task.status = !task.status;
    task.save(()=>{
      res.redirect('/');
    });
  });
});

module.exports = router;
