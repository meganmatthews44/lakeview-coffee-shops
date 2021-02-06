const User = require('../models/User');

function showProfile(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render('user/profile', {
            user: req.user,
        })
    })
};

function editPicture(req, res) {
    res.render('user/picture');
}

module.exports = {
    showProfile,
    editPicture
}