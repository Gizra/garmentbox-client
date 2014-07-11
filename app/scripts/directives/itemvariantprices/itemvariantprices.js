'use strict';

angular.module('garmentboxClientApp')
  .directive('itemVariantPrices', function () {
    return {
      templateUrl: 'scripts/directives/itemvariantprices/view.html',
      scope: {
        prices: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
