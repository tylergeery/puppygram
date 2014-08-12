'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  members: [String],
});

module.exports = mongoose.model('Group', GroupSchema);