'use strict';

angular.module('puppyGramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pet', {
        url: '/pet',
        templateUrl: 'app/pet/pet.html',
        controller: 'PetCtrl'
      });
  });