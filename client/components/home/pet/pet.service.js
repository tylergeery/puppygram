'use strict';

angular.module('puppyGramApp')
  .factory('Pet', function ($resource) {
    return $resource('/api/pets/:id/:controller', {
      id: '@_id'
    },
    {
      myPets: {
      	method: 'GET',
      	isArray: true,
        params: {
          controller:'mypets'
        }
      }
    });
  });