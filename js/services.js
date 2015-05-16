'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', ['ngResource']);

// myAppServices.factory('Hospital', ['$resource',
//   function($resource){
//     return $resource('hospitals/:hospitalId.json', {}, {
//       query: {method:'GET', params:{hospitalId:'hospitals'}, isArray:true}
//     });
//   }
// ]);

myAppServices.service('Hospital', function($http){
	return {
		get: function(){
		  var Url   = "hospitals/hospitals.csv";
		  $http.get(Url).success(function(response) {
		  	var hospitals = []
			  var rows = response.data.split("\n");
		  	var split_rows = [];
		  	_.each(rows, function(row){
		  		hospitals.push(row.split(","));
		  	})
		  	return hospitals
  		});
		}
	}
});