'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  members: [String],
});

module.exports = mongoose.model('Group', GroupSchema);