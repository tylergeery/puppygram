'use strict';

angular.module('puppyGramApp')
  .factory('Pet', function ($resource) {
    return $resource('/api/pets/:id', {
      id: '@_id'
    },
    {
      
    });
  });