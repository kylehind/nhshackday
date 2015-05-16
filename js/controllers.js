'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FeedbackIndexController', function ($scope){

});

myAppControllers.controller('FeedbackValidationController', function ($scope, $location, Hospital){
  $scope.gender_options = [
    {text: "Male", value: 0},
    {text: "Female", value: 1},
  ]
  var self = this;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // list of `state` value/display objects
  self.states        = loadAll();
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange   = searchTextChange;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
  	// var hospitals = Hospital.get();
   //  console.log(hospitals);
   
   //  return hospitals.map( function (state) {
   //    return {
   //      value: state.toLowerCase(),
   //      display: state
   //    };
   //  });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }

  $scope.processForm = function(formData){
    console.log(formData);
    $location.path( "/feedback/form" ); 
  };  
});

myAppControllers.controller('FeedbackFormController', function ($scope){
  $scope.processForm = function(formData){
    console.log(formData);
    $location.path( "/feedback/form" ); 
  };  
});

myAppControllers.controller('FeedbackCompleteController', function ($scope){
  // var num = Math.floor((Math.random()*6)+1);
  // $scope.reference = num + "patient_procedure"
});

myAppControllers.controller('FeedbackEditController', function ($scope){

});