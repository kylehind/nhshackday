'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FeedbackIndex', ['$scope', 'Feedback',
  function($scope, Feedback) {
    $scope.Feedbacks = Feedback.query();
    $scope.orderProp = 'order';
  }
]);

myAppControllers.controller('FeedbackShow', ['$scope', '$routeParams', 'Feedback',
]);
