/////express/////
var express = require('express');
var nodemailer = require("nodemailer");
var expressLayouts = require('express-ejs-layouts');
var bodyParser =require('body-parser');
var app = express();
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "danielbroadbent87@gmail.com",
        pass: "Kaleb2010"
    }
});
var port = 8080;
var http = require("http");


//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes')
app.use('/', router);

//set static files (css and iamges etc) location
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(){
	console.log('app started')
});






////

/// message received

app.get('/',function(req,res){
    res.sendfile('index.ejs');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});