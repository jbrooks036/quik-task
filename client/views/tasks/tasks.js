(function(){
  'use strict';

  angular.module('quik-task')
  .controller('TasksCtrl', ['$scope', 'Task', function($scope, Task){
    $scope.sort = 'name';
    $scope.task = {};
    $scope.tasks = [];


    Task.all().then(function(response){
      debugger;
      $scope.tasks = response.data.tasks;
    });

    $scope.add = function(){
      console.log('>>>>>>>>>>>>>>>>task ng view add ');
      Task.create($scope.task).then(function(response){
        $scope.tasks.push(response.data.task);
        $scope.task = {};
        console.log('>>>>>>>>>>>task ng view add task: ', $scope.task);
      });
    };

  }]);
})();

