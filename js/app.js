'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers',
  'myAppServices'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feedback', {
        templateUrl: 'partials/feedback/index.html',
        controller: 'FeedbackIndex'
      }).
      when('/feedback/new', {
        templateUrl: 'partials/feedback/new.html',
        controller: 'FeedbackNew'
      }).
      when('/feedback/edit', {
        templateUrl: 'partials/feedback/new.html',
        controller: 'FeedbackEdit'
      }).
      otherwise({
        redirectTo: '/feedback'
      });
  }
]);
