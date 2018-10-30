var carsArray = angular.module('carsApp', []);
carsArray.controller('carsController',function($scope,$http){
  $http.get('assets/js/voiture.json').then(function(result){
	$scope.arrayCars = result.data;
	});
});
