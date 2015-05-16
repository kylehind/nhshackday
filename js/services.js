'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('Example', ['$resource',
  function($resource){
    return $resource('examples/:exampleId.json', {}, {
      query: {method:'GET', params:{exampleId:'examples'}, isArray:true}
    });
  }
]);
