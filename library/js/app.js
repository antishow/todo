var app = angular.module('todo', ['ngRoute']);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/library/ng-templates/todo-list.html',
      controller: 'TodoListController'
    }).when('/add', {
      templateUrl: '/library/ng-templates/todo-entry-form.html',
      controller: 'TodoAddController'
    });
  }
]);
app.controller('StartController', [
  '$scope',
  function ($scope) {
    $scope.message = 'Hello, world!';
  }
]);
app.controller('TodoAddController', [
  '$scope',
  function ($scope) {
    $scope.newTodo = {
      title: 'Title',
      text: 'Text',
      done: false
    };
    $scope.save = function () {
      var todos = [];
      if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
      }
      todos.push($scope.newTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    window.scope = $scope;
  }
]);
app.controller('TodoListController', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.todos = JSON.parse(localStorage.getItem('todos'));
    $scope.addTodo = function () {
      $location.path('/add');
    };
  }
]);
app.directive('todoListItem', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/library/ng-templates/directive/todo-list-item.html',
    scope: { todo: '=' }
  };
});