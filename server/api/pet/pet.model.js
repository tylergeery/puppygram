'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PetSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Pet', PetSchema);