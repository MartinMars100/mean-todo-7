'use strict';
console.log('log database.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo-3', function(err) {
  if(err) {
    console.log('Failed connecting to Mongodb');
  } else {
    console.log('Successfully connected to Mongo');
  }
      
});



