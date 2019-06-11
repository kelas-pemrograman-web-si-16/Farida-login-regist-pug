var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('login')
})

router.get('/regist', function(req, res, next) {
    res.render('regist')
})

router.get('/menu', function(req, res, next) {
    res.render('menu')
})

module.exports = router;