app.controller('TownsCtrl', ['$scope','$rootScope','townsData','filter', function($scope,$rootScope,townsData,filter){
	$scope.towns = townsData.getTowns();

	//townsData.getTowns()
	//	.$promise
	//	.then(function (data) {
	//		$scope.town = data;
	//	});


	$scope.townClicked = function (town) {
		filter.filterByTown(town);
		$rootScope.$broadcast('townClicked',town)
	}
	
}])