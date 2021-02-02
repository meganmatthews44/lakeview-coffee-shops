const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
      //  default: ,
    },
    websiteUrl: {
        type: String,
    },
    posts: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
  }, {
    timestamps: true
  });

const Shop = mongoose.model( 'Shop', userSchema );

module.exports = Shop;