app.controller("TodoListController", function($scope, $location){
	$scope.todos = JSON.parse(localStorage.getItem("todos"));

	$scope.addTodo = function(){
		$location.path("/add");
	};
});