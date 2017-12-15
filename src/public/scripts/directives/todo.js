'use strict';

angular.module('todoListApp')
.directive('todo', function(){
  return {
    templateUrl: '/static/todos.jade',
    replace: true,
    controller: 'todoCtrl'
  }
});