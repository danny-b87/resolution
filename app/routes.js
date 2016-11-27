////routes///

// require express
var express = require('express');
var path = require('path');
//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route our homepage
router.get('/', function(req, res) {
	res.render('pages/index');
});

//route our about
router.get('/about', function(req, res) {
	res.render('pages/about');
});

//route our contact
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res){

});