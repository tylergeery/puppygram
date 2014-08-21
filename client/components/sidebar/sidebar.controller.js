'use strict';

angular.module('puppyGramApp')
  .controller('SidebarCtrl', ['$scope', 'Group', 'Pet', 'Auth', 'User', function ($scope, Group, Pet, Auth, User) {

  	// Find all these subgroups to put in a left sidebar
    $scope.myGroups = Group.myGroups();
    $scope.myPets = Pet.myPets();
    // $scope.myFriends = User.getFriends();

    $scope.addGroup = function() {
    	console.log("Adding a new group");
    	if($scope.newGroup) {
    		Group.save({name: $scope.newGroup}, 
    			function() {
    				$scope.newGroup = '';
    				$scope.myGroups = Group.myGroups();
    		}, 	function(err) {
    				// Really need to figure out what you want to do about this error
    				console.log("Error in saving");
    		});
    	}
    	// Really dont need to do anything if there is currently no name.
    	// Just ignore it, I hope the user will understand
    }
    
    $scope.addPet = function() {
    	console.log("Adding a new pet");
    	if($scope.newPet) {
    		Pet.save({name: $scope.newPet}, 
    			function() {
    				$scope.newPet = '';
    				$scope.myPets = Pet.myPets();
    		}, 	function(err) {
    				// Really need to figure out what you want to do about this error
    				console.log("Error in saving");
    		});
    	}
    	// Really dont need to do anything if there is currently no name.
    	// Just ignore it, I hope the user will understand
    }

  }]);
