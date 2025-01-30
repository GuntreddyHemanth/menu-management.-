const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');


router.get('/search', itemController.searchItem);


router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItem);
router.put('/:id', itemController.editItem);



module.exports = router;