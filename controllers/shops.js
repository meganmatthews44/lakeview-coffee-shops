const User = require('../models/User');
const Shop = require('../models/Shop');
const Post = require('../models/Post');

function shopIndex(req, res) {
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

function addShop (req, res) {
    const shop = new Shop(req.body);

    shop.save(function(err) {
        if (err) return res.render('shops/new');
        console.log(shop);
        res.redirect('/shops');
    })
}

module.exports = {
    shopIndex,
    newShop,
    addShop
}