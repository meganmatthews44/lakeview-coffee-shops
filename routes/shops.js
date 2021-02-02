const router = require('express').Router();
const shopCtrl = require('../controllers/shops');

router.get('/', shopCtrl.index);

router.get('/new', shopCtrl.newShop);

module.exports = router;