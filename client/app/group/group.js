'use strict';

angular.module('puppyGramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('group', {
        url: '/groups',
        templateUrl: 'app/group/group.html',
        controller: 'GroupCtrl'
      });
  });