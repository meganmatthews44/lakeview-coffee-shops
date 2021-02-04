const User = require('../models/User');
const Shop = require('../models/Shop');
const Post = require('../models/Post');

function shopIndex(req, res) {
    Shop.find({}, function(err, shops){
        res.render('shops/index', {
            shops,
        })
    })
};

function newShop (req, res) {
    res.render('shops/new', {

    });
};

function addShop (req, res) {
    // const shop = new Shop(req.body);
    console.log(req.body)
    Shop.create(req.body, (err, createdShop) => {
        if (err) return console.log(err)
        console.log(createdShop)
        res.redirect('/shops');
    })
    /* shop.save(function(err) {
        if (err) return res.render('shops/new');
        console.log(shop);
        res.redirect('/shops');
    }) */
};

module.exports = {
    shopIndex,
    newShop,
    addShop
};