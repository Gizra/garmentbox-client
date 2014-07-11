'use strict';

angular.module('garmentboxClientApp')
  .directive('breadcrumbs', function () {
    return {
      templateUrl: 'scripts/directives/breadcrumbs/view.html',
      scope: {
        hierarchy: '='
      },
      restrict: 'E',
      link: function postLink(scope) {
      }
    };
  });
