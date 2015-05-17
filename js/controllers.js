'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FeedbackIndexController', function ($scope){

});

myAppControllers.controller('FeedbackValidationController', function ($scope, $rootScope, $location, $mdDialog, Hospital, Validation){
  $scope.gender_options = [
    {text: "Male", value: 1},
    {text: "Female", value: 2},
  ];
  $scope.stripPostcode = function(postcode){
    console.log(postcode);
    if(_.isUndefined(postcode)){
      $rootScope.partial_postcode = "";
    } else {
      if(postcode.length > 3){
        var reg = /[a-zA-Z]{1,2}\d{1,2}\s?\d{1}(.*)/;
        var new_pc = postcode.replace(postcode.match(reg)[1], "");
        $rootScope.partial_postcode = new_pc;
      }else{
        $rootScope.partial_postcode = "";
      }
    }
  };

  $scope.hideRadios = function(hospital_id){
    var hospital_fields = $(".hospital[aria-checked=false]").hide();   
  };

  $scope.findHospital = function(formData){
    $scope.hospitals = "No hospital found";
    if(formData){
      Hospital.get(formData.name);
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Name Empty')
          .content('Please enter a hospital name to search.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }
    // then set a hidden field with id 
  };

  $scope.processForm = function(formData){
    console.log(formData);
    if(formData){
      Validation.set(formData);
      $location.path( "/feedback/form" ); 
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }   
  };  
});

myAppControllers.controller('FeedbackFormController', function ($scope, $mdDialog, $location, Form){
  $scope.changeImage = function(){
    console.log("in change image");
    var value = $(".md-thumb-container")[0].style.cssText.replace("left: ","").replace("%;","");
    if(value >= 75 && value <= 100){
      console.log("happy");
      $(".md-thumb").html("<img class='face' src='img/1_laugh.png'>");
    } else if (value >= 55 && value <= 75){
      $(".md-thumb").html("<img class='face' src='img/2_smile.png'>");
    } else if (value >= 35 && value <= 54){
      $(".md-thumb").html("<img class='face' src='img/3_neutral.png'>");
    } else if (value >= 26 && value <= 34){
      $(".md-thumb").html("<img class='face' src='img/4_sad.png'>");
    } else if (value >= 0 && value <= 25){
      $(".md-thumb").html("<img class='face' src='img/5_crying_20.png'>");
    }
  };
  $scope.hideImage = function(){
    $('.face').hide();
  };
  $scope.processForm = function(formData){
    if(formData){
      formData.reference = ("patient_ref" + (Math.random()*10000000)).replace(".","")
      Form.set(formData);
      $location.path( "/feedback/complete" ); 
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }  
  };  
});

myAppControllers.controller('FeedbackCompleteController', function ($scope, $location, Feedback){
  Feedback.send();
  $scope.reference = localStorage.reference;
  $scope.gotoIndex = function(){
    $location.path( "/feedback/index" );
  };
});

myAppControllers.controller('FeedbackEditController', function ($scope){

});