(function(){
  'use strict';

  angular.module('quik-task')
  .factory('Task', ['$http', function($http){

    function create(task){
      console.log('>>>>>>>>>>>>>>>>task ng factory create');
      return $http.post('/tasks', task);
    }

    function all(){
      return $http.get('/tasks');
    }

    return {create:create, all:all};
  }]);
})();

