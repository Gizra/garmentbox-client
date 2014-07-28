'use strict';

/**
 * @ngdoc function
 * @name garmentboxClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the garmentboxClientApp
 */
angular.module('garmentboxClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
