var express = require('express');
var router = express.Router();

const usersController = require('../controllers').users;
const postsController = require('../controllers').posts;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:id', usersController.getById);
router.get('/post/:id', postsController.getById);

module.exports = router;
