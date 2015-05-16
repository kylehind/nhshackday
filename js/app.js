'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'angular-underscore',
  'ngMaterial',
  'myAppControllers',
  'myAppServices'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feedback', {
        templateUrl: 'partials/feedback/index.html',
        controller: 'FeedbackIndexController'
      }).
      when('/feedback/validation', {
        templateUrl: 'partials/feedback/validation.html',
        controller: 'FeedbackValidationController'
      }).
      when('/feedback/form', {
        templateUrl: 'partials/feedback/form.html',
        controller: 'FeedbackFormController'
      }).
      when('/feedback/edit', {
        templateUrl: 'partials/feedback/edit.html',
        controller: 'FeedbackEditController'
      }).
      otherwise({
        redirectTo: '/feedback'
      });
  }
]);
