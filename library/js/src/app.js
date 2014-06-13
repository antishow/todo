var app = angular.module("todo", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: '/library/ng-templates/todo-list.html',
		controller: "TodoListController"
	}).
	when("/add", {
		templateUrl: '/library/ng-templates/todo-entry-form.html',
		controller: "TodoAddController"
	});
});