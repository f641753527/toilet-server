var express = require('express');
var router = express.Router();

var { admin } = require('../controllers');

// users
router.post('/user/login', admin.user.login);


// news
router.get('/news/list', admin.news.list);
router.post('/news/add', admin.news.add);
router.post('/news/del', admin.news.del);

module.exports = router;
