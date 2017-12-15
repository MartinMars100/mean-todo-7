'use strict';
console.log('log main.js');
angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService){

  dataService.getTodos(function(response) {
    console.log('log main controller');
    var todos = response.data.todos;
    $scope.todos = todos;
  });
  
  $scope.addTodo = function(){
    console.log('log main controller add Todo function.');
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodos = function() {
    console.log('log main controller save Todo function');
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
        return todo;
      }
    });
    dataService.saveTodos(filteredTodos);
  };
  
});
