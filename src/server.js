'use strict';

// angular.module("todoListApp", []);

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
//   posts = require('./mock/posts.json');
 
var app = express();
var path = require('path');

require('./public/database.js'); // dot goes down one level 
require('./seed');

var port = process.env.PORT;

var carMake = "Mazda";
var carYear = "2012";
var carModel = "3";

app.use('/static', express.static(__dirname +'/public')); //type static before file name
app.use(parser.json());

app.set('view engine', 'jade');  //This is from the Jade
// part of the Treehouse Express Class.
app.set('views', __dirname + '/public/templates'); //Use __dirname since we
//sometimes run with a nodemon command with a path to the server.js file.

app.get('/', function(req, res) {
    console.log('see res render index');
    res.render('index.jade');   
});

app.get('/src/styles/main.css', function(req, res) { //Got rid of not found error
    res.render('index.jade');   //The Jade Way--you don't have to use
    // this jade extension
    // res.render('index.ejs');
});

app.use('/api', router);

app.listen(port, function() {
    console.log("Theeee Frontend Server is Running....PORT" + port);
});
