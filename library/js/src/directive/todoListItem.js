app.directive("todoListItem", function(){
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/library/ng-templates/directive/todo-list-item.html",
		scope: {
			todo: "@"
		}
	};
});