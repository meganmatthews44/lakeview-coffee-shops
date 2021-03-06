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

        
        newPost.save();
        console.log(req.user._id);
        res.redirect(`/shops/${shop._id}`);
        console.log(posts, "posts from submit")
      });
    });
};

function deletePost (req, res) {
  const id = req.params.id
  Post.findByIdAndDelete(id, function(err, post){
    const shopId = post.shop
    if(err) console.log(err)
    res.redirect(`/shops/${shopId}`)
  })
};

function updatePost (req, res) {
  Post.findById(req.params.id, function(err, post) {
    Shop.findById(req.params.id, function(err, shop){

    
    const context = {
      post,
      shop: post.shop
    }
    res.render('posts/edit', context);
  })
  })
};

function savePost (req, res) { 
  Shop.findById(req.params.shopId, (err, foundShop) => {
    Post.findByIdAndUpdate(req.params.postId, 
      {
        $set: {... req.body}, 
      },
      {
        new: true,
      },
      (err, updatedPost) => {
        if (err) return console.log(err)
        res.redirect(`/shops/${req.params.shopId}`);
        console.log(foundShop);
        console.log('this post was updated', updatedPost)
      })
  })
};

module.exports = {
    createPost,
    deletePost,
    updatePost,
    savePost
}