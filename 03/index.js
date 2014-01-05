var app = angular.module('app', []);

app.controller('MyFirstController', function($scope) {
  $scope.counter = 0;

  $scope.add = function(amount) {
    $scope.counter += amount;
  };

  $scope.subtract = function(amount) {
    $scope.counter -= amount;
  };
});
