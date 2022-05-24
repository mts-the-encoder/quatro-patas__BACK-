'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pets-controller'); 

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/species/:species', controller.getBySpecie);
router.get('/favorite/:favorite', controller.getByFav);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;