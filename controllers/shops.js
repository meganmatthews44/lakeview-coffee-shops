const User = require('../models/User');
const Shop = require('../models/Shop');
const Post = require('../models/Post');

function index(req, res) {
    Shop.find({}, function(err, shops){
        res.render('shops/index', {
            shops,
            user: req.user
        })
    })
};

function newShop (req, res) {
    res.render('shops/new', {
        user: req.user
    });
}

module.exports = {
    index,
    newShop
}