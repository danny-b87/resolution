////routes///

/// gravtar ///
var gravatar = require('nodejs-gravatar');
///var gravatar = require('nodejs-gravatar');

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
	var users = [
		{name: 'dan', email: 'danielbroadbent87@gmail.com', avatar: ""},
		{name: 'ant', email:'anthonybroadbent1@gmail.com', avatar: ""},
	];
	for (user of users){
		user.avatar = gravatar.imageUrl(user.email);
	};
	res.render('pages/about', {users: users });
});

	

//route our contact
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res){
	res.send('Thanks for contacting us, ' + req.body.name +  ' we will reply very soon....:)')
console.log(req.body.message);
});

