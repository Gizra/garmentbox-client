'use strict';

angular.module('garmentboxClientApp')
  .controller('ItemVariantCtrl', function ($scope, $routeParams, itemVariant) {
    $scope.id = $routeParams.id;

    itemVariant.get($scope.id).success(function(response) {
      $scope.itemVariant = response;
    });

    $scope.validateItemVariant = function(data) {
      return itemVariant.validate(data);
    };

    $scope.updateItemVariant = function() {
      return itemVariant.update($scope.itemVariant);
    };
  });
