var app = angular.module("todo", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: '/library/ng-templates/start.html'
	});
});