const router = require('express').Router();
const shopCtrl = require('../controllers/shops');
const postCtrl = require('../controllers/posts')

router.get('/', shopCtrl.shopIndex);

router.get('/new', shopCtrl.newShop);

router.post('/', shopCtrl.addShop);

router.get('/:id', shopCtrl.show);

router.post('/:id/reviews', postCtrl.createPost);

router.delete('/:id/reviews/:id', postCtrl.deletePost);

router.put('/:id/reviews/:id/edit', postCtrl.updatePost);

router.put('/:id/reviews/:id/save', postCtrl.savePost)

module.exports = router;