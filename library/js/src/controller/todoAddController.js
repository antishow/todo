app.controller("TodoAddController", function($scope){
	$scope.newTodo = {
		title: "Title",
		text: "Text",
		done: false
	};

	$scope.save = function(){
		var todos = [];
		if(localStorage.getItem("todos")){
			todos = JSON.parse(localStorage.getItem("todos"));
		}

		todos.push($scope.newTodo);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	window.scope = $scope;
});