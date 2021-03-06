'use strict';

angular.module('puppyGramApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    /*$scope.menu = [{
      'title': 'Home',
      'link': '/user'
    },
    {
      'title': 'Pets',
      'link': '/pets'
    }];*/

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    // $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.isLoginRoute = function() {
      return ($location.path() === '/login' || $location.path() === '/signup') ? true : false;
    }

    if($scope.isLoginRoute() && $scope.isLoggedIn()) {
      $location.path('/user');
    }

    $scope.search_term = '';
  });