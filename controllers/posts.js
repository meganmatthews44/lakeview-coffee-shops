const User = require('../models/User');
const Shop = require('../models/Shop');
const Post = require('../models/Post');



function createPost (req, res) {
    const id = req.params.id;
    Shop.findById(id, function (err, shop) {
      if (err) return console.log(err);
      Post.find({}, function (err, posts) {
        if (err) return console.log(err);
  
        /* Created new ticket from the Ticket schema */
        const newPost = new Post({
        
          caption: req.body.caption,
          rating: req.body.rating,
          shop: shop._id,
          user: req.user._id,
          userName: req.user.name
        });

        console.log(newPost);
        newPost.save();
        
        res.redirect(`/shops/${shop._id}`);
        console.log(posts, "posts from submit")
      });
    });
};

module.exports = {
    createPost
}