'use strict';

var app = angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});
	$routeProvider.when('/login', {
		templatUrl: '/template/login.html',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/register', {
		templatUrl: '/template/register.html',
		controller: 'RegisterCtrl'
	});
	$routeProvider.otherwise({
		redirectTo: '#/'
	});
}]);