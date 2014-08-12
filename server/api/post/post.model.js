'use strict';

var mongoose = require('mongoose'),
    CommentSchema = require('../comment/comment.model.js'),
    Schema = mongoose.Schema;


var PostSchema = new Schema({
  content: String,
  image: String,
  video: String,
  username: String,
  rank: Number,
  created: {type: Date, default: Date.now},
  edited: {type: Date, default: Date.now},
  comments: [CommentSchema]
});

module.exports = mongoose.model('Posts', PostSchema);