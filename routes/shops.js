const router = require('express').Router();
const shopCtrl = require('../controllers/shops');

router.get('/', shopCtrl.shopIndex);

router.get('/new', shopCtrl.newShop);

router.post('/', shopCtrl.addShop);

module.exports = router;