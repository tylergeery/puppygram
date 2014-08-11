'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  content: String,
  username: String,
  rank: Number,
  created: Date,
  edited: Date,
});

module.exports = mongoose.model('Comment', CommentSchema);