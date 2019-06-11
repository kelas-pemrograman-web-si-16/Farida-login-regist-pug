var express = require('express');
var router = express.Router();

router.get('/main', function(req, res, next) {
    res.render('main')
})

router.get('/menu', function(req, res, next) {
    res.render('menu')
})

router.get('/specialties', function(req, res, next) {
    res.render('specialties')
})

router.get('/reservation', function(req, res, next) {
    res.render('reservation')
})

router.get('/about', function(req, res, next) {
    res.render('about')
})

router.get('/blog', function(req, res, next) {
    res.render('blog')
})

router.get('/contact', function(req, res, next) {
    res.render('contact')
})
module.exports = router;