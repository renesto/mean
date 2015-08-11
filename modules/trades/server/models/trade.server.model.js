'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TradeSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
/**
 * trade Schema
 */
/*var TradeSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  state: {
    type: String,
    default: 'pending',
    trim: true
  },
  ownedResource1: {
    type: Schema.ObjectId,
    ref: 'OwnedResource',
    required: 'Owned Resource cannot be blank'
  },
  ownedResource2: {
    type: Schema.ObjectId,
    ref: 'OwnedResource',
    required: 'Owned Resource cannot be blank'
  },
});
*/

mongoose.model('Trade', TradeSchema);
