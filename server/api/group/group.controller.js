'use strict';

var _ = require('lodash');
var Group = require('./group.model');

// Get list of groups
exports.index = function(req, res) {
  Group.find(function (err, groups) {
    if(err) { return handleError(res, err); }
    return res.json(200, groups);
  });
};

// Get a single group
exports.show = function(req, res) {
  Group.findById(req.params.id, function (err, group) {
    if(err) { return handleError(res, err); }
    if(!group) { return res.send(404); }
    return res.json(group);
  });
};


// Get a list of a user's own pets
exports.getMyGroups = function(req, res) {
  var userId = req.user._id;
  Pet.find({_id: userId}, function (err, pets) {
    if(err) { return handleError(res, err); }
    return res.json(200, pets);
  });
};

exports.getUserGroups = function(req, res) {
  var userId = req.user._id;
  var herId = req.params.id;
  User.findOne({_id: herId, friends: { $elemMatch: [userId]}}, function(err, user) {
    if(user) {
      Pet.find({_id: herId}, function (err, pets) {
        if(err) { return handleError(res, err); }
        return res.json(200, pets);
      });
    } else {
      return res.json(401, "This user's pets are private.");
    }
  });
}

// Creates a new group in the DB.
exports.create = function(req, res) {
  Group.create(req.body, function(err, group) {
    if(err) { return handleError(res, err); }
    return res.json(201, group);
  });
};

// Updates an existing group in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Group.findById(req.params.id, function (err, group) {
    if (err) { return handleError(err); }
    if(!group) { return res.send(404); }
    var updated = _.merge(group, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, group);
    });
  });
};

// Deletes a group from the DB.
exports.destroy = function(req, res) {
  Group.findById(req.params.id, function (err, group) {
    if(err) { return handleError(res, err); }
    if(!group) { return res.send(404); }
    group.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}