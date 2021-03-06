'use strict';

angular.module('puppyGramApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getFriends: {
        method: 'GET',
        params: {
          controller: 'friends'
        }
      }
	  });
  });
