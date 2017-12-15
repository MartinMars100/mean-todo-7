'use strict';

angular.module('todoListApp')
.service('dataService', function($http, $q){
  this.helloConsole = function() {
    console.log('This is the hello console service.');
  };
  
  this.getTodos = function(callback){
    console.log('log getTodos service');
    $http.get('/api/todos')
    .then(callback);
    };
  
  this.deleteTodo = function(todo) {
    if (!todo._id) {
      return $q.resolve();
    }
    return $http.delete('/api/todos/' + todo._id).then(function() {
      console.log("I deleted the " + todo.name + " todo");      
    });
  };
  
  this.saveTodos = function(todos) {
    var queue = [];
    todos.forEach(function(todo) {
      console.log ('log data.js save Todos function');
      var request;
      if(!todo._id) {
        console.log('log data.js 2');
        request = $http.post('/api/todos', todo);
      } else {
        request = $http.put('/api/todos/' + todo._id ,todo).then(function(result) {
          todo = result.data.todo;
          return todo;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + todos.length + " todos");
    });
  };
  
});

