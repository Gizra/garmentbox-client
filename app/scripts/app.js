'use strict';

/**
 * @ngdoc overview
 * @name garmentboxClientApp
 * @description
 * # garmentboxClientApp
 *
 * Main module of the application.
 */
angular
  .module('garmentboxClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/item-variant/:id', {
        templateUrl: 'views/item-variant.html',
        controller: 'ItemVariantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
