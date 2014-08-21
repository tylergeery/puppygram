'use strict';

var mongoose = require('mongoose'),
    CommentSchema = require('../comment/comment.model.js'),
    Schema = mongoose.Schema;


var PostSchema = new Schema({
  content: String,
  image: String,
  video: String,
  username: String,
  userId: String,
  groupId: String,
  petId: String,
  rank: Number,
  created: {type: Date, default: Date.now},
  edited: {type: Date, default: Date.now},
  keywords: [String],
  comments: [CommentSchema]
});

module.exports = mongoose.model('Posts', PostSchema);