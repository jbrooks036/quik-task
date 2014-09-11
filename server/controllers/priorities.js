'use strict';

var Priority = require('../models/priority');

exports.create = function(req, res){
  Priority.create(req.body, function(err, priority){
    res.send({priority:priority});
  });
};

exports.index = function(req, res){
  Priority.all(function(err, priorities){
    console.log('>>>>>>>>>>priorities.index called; req.params = ',priorities);
    res.send({priorities:priorities});
  });
};
