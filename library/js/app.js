var app = angular.module('todo', ['ngRoute']);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/library/ng-templates/start.html' });
  }
]);
app.directive('todoListItem', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/library/ng-templates/directive/todo-list-item.html',
    scope: { todo: '@' }
  };
});