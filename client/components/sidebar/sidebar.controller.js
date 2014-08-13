'use strict';

angular.module('puppyGramApp')
  .controller('SidebarCtrl', ['$scope', 'Group', 'Pet', 'Auth', 'User', function ($scope, Group, Pet, Auth, User) {

  	// Find all these subgroups to put in a left sidebar
    $scope.myGroups = Group.myGroups();
    $scope.myPets = Pet.myPets();
    // $scope.myFriends = User.getFriends();
    
  }]);
