/**
 *  root
 */ 

let root =  angular.module('root',[]);
root.controller('doInit', function($scope, $http){

	$scope.section = {
		login : true,
		signup : false,
		home : false,
		dashoard : false
	}


});