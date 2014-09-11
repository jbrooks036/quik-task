'use strict';

var Task = require('../models/task');

exports.create = function(req, res){
  console.log('>>>>>>>>>>NODE - tasks.create called; req.body = ', req.body);
  Task.create(req.body, function(err, task){
    res.send({task:task});
  });
};

exports.index = function(req, res){
  Task.all(function(err, tasks){
    console.log('>>>>>>>>>>NODE - tasks.index called; req.params = ', tasks);
    res.send({tasks:tasks});
  });
};
