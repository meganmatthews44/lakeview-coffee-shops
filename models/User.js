const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    avatarURL: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPTBqSDcbuon4InYVkJLQ5Q2nA93cYBr1eQ&usqp=CAU',
    },
    googleId: {
        type: String,
    },
    posts: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }
  }, {
    timestamps: true
  });
  
const User = mongoose.model( 'User', userSchema );

module.exports = User;