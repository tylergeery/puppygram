'use strict';

angular.module('puppyGramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'AdminCtrl'
      });
  });