'use strict';

angular.module('app.mercadoria', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mercadoria', {
    templateUrl: './mercadoria/mercadoria-list.html',
    controller: 'MercadoriaCtrl'
  });
}])

.controller('MercadoriaCtrl', ['$http', function($http) {
  var self = this;

  self.init = function() {
    $http.get("/api/mercadorias").success(function(response) {
      self.mercadorias = response._embedded.mercadorias;
    }).error(function(error) {
      console.log('error: ' + error);
    });
  };

  self.init();
}]);

