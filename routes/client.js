var express = require('express');
var router = express.Router();


var { client } = require('../controllers');

/* GET home page. */
router.get('/news/list', client.news.list);

module.exports = router;
