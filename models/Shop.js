const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
      //  default: ,
    },
    websiteUrl: {
        type: String,
    },
    averageRating: {
        type: Number,
    },
    posts: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    },
  }, {
    timestamps: true
  });

const Shop = mongoose.model( 'Shop', shopSchema );

module.exports = Shop;