'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PetSchema = new Schema({
  name: String,
  bio: String,
  type: String,
  age: Number,
  breed: String,
  nicknames: [Array],

  // These will be arrays of links to the EC2 instance
  // Security for these videos still needs to be worked out
  // Also need to work out how they will be tagged in regular posts
  images: [Array],
  videos: [Array],
  created: {type:Date, default: Date.now},
  keywords: [String]
});

module.exports = mongoose.model('Pet', PetSchema);