const User = require('../models/User');

function showProfile(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render('user/profile', {
            user: req.user,
        })
    })
};

module.exports = {
    showProfile
}