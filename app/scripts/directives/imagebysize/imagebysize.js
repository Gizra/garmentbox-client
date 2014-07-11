'use strict';

angular.module('garmentboxClientApp')
  .directive('imageBySize', function () {
    return {
      templateUrl: 'scripts/directives/imagebysize/view.html',
      restrict: 'E',
      scope: {
        images: '=',
        size: '@'
      },
      link: function postLink(scope, element, attrs) {
        angular.forEach(scope.images, function(data) {
          if (data.size === scope.size) {
            scope.url = data.url;
          }
        });
      }
    };
  });
