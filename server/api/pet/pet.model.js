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
  images: [Array],
  videos: [Array],
  created: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Pet', PetSchema);