const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  img: {
    type: String,
    required: false
  },
  caption: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  shop: {
      type: mongoose.Types.ObjectId,
      ref: 'Shop'
  }
},
{
  timestamps: true
});

const Post = mongoose.model('Post', postSchema )

module.exports = Post;