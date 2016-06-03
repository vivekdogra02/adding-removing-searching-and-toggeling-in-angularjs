// Code goes here

angular.module('MyApp', ['ngRoute'])
  .constant('VERSION', '1.0')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl: './home.html'
  })
}])

.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.name = "Vivek";
  $scope.description = function() {
    return "Function executed on the scope";
  }
}])

.controller('FormCtrl', ['$scope', function($scope) {
  $scope.generateAges=function()
  {
    var ages=[];
    for(var i=18;i<=60;i++)
    {
      ages.push(i);
    }
    return ages;
  };

  $scope.submit=function()
  {
    alert('submitted');
  };
}])
