'use strict';

angular.module('puppyGramApp')
  .factory('Group', function ($resource) {
    return $resource('/api/groups/:id', {
      id: '@_id'
    },
    {
      
    });
  });
