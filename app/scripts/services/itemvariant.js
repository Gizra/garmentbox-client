'use strict';

angular.module('garmentboxClientApp')
  .service('itemVariant', function Itemvariant($http, $q) {

    // Cached data.
    var cache = {};

    // Public API.
    return {

      /**
       * Return a promise object of the list of Movies.
       *
       * @returns {*}
       */
      get: function(id) {
        return $http.get('http://api.example.com:8080/api/v1/item-variant/' + id).success(function(data) {
          cache[id] = data;
        });
      },

      update: function(data) {
        return $http.post('http://api.example.com:8080/api/v1/item-variant/update', data);
      },

      validate: function(data) {
        var defer = $q.defer();
        $http.post('http://example.com/api/v1/item-variant/update', data).success(function(res) {
          if (res.status === 'ok') {
            defer.resolve();
          }
          else {
            defer.resolve(res.msg);
          }
        }).error(function(){
            defer.reject('Server error!');
          });
        return defer.promise;
      }
    };
  });
