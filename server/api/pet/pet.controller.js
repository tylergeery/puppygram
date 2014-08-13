'use strict';

var _ = require('lodash');
var Pet = require('./pet.model');
var User = require('../user/user.model');

// Get list of pets
exports.index = function(req, res) {
  var userId = req.user._id;
  Pet.find({_id: userId}, function (err, pets) {
    if(err) { return handleError(res, err); }
    return res.json(200, pets);
  });
};

// Get a list of a user's own pets
exports.getMyPets = function(req, res) {
  var userId = req.user._id;
  Pet.find({_id: userId}, function (err, pets) {
    if(err) { return handleError(res, err); }
    return res.json(200, pets);
  });
};

exports.getUserPets = function(req, res) {
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

// Get a single pet
exports.show = function(req, res) {
  Pet.findById(req.params.id, function (err, pet) {
    if(err) { return handleError(res, err); }
    if(!pet) { return res.send(404); }
    return res.json(200, pet);
  });
};

// Creates a new pet in the DB.
exports.create = function(req, res) {
  Pet.create(req.body, function(err, pet) {
    if(err) { return handleError(res, err); }
    return res.json(201, pet);
  });
};

// Updates an existing pet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pet.findById(req.params.id, function (err, pet) {
    if (err) { return handleError(err); }
    if(!pet) { return res.send(404); }
    var updated = _.merge(pet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, pet);
    });
  });
};

// Deletes a pet from the DB.
exports.destroy = function(req, res) {
  Pet.findById(req.params.id, function (err, pet) {
    if(err) { return handleError(res, err); }
    if(!pet) { return res.send(404); }
    pet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}