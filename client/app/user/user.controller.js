'use strict';

angular.module('puppyGramApp')
  .controller('UserCtrl', function ($scope, $http, Auth, User) {

    $scope.isLoggedIn = Auth.isLoggedIn;

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
