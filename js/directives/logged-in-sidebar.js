app.directive('loggedInSidebar', function() {
	return {
		 controller: 'LoggedInSibebarCtrl',
		 restrict: 'E',
		 templateUrl: 'templates/public/left-sidebar.html',
		 replace: true,
			
		}
});