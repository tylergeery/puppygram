'use strict';

angular.module('puppyGramApp')
  .controller('SidebarCtrl', ['$scope', 'Group', 'Pet', 'Auth', 'User', function ($scope, Group, Pet, Auth, User) {

  	// Find all these subgroups to put in a left sidebar
    // $scope.myGroups = Group.query();
    $scope.myPets = Pet.query();
    $scope.myFriends = User.query();
    
  }]);
