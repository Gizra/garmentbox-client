'use strict';

/**
 * @ngdoc function
 * @name angularProjectsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjectsApp
 */
angular.module('angularProjectsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
