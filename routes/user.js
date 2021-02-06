const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/', isLoggedIn, userCtrl.showProfile);

router.get('/picture', userCtrl.editPicture);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;