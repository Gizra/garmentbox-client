'use strict';

/**
 * @ngdoc function
 * @name angularProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectsApp
 */
angular.module('angularProjectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
