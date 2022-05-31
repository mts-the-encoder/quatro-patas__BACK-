'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pets-controller'); 

/**
 * @swagger 
 *  components:
 *   schemas:
 *     Pets:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *       example:
 *         id: d5fE_asz
 *         name: The New Turing Omnibus
 * 
 */

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/species/:species', controller.getBySpecie);
router.get('/favorites/:favorite', controller.getByFav);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;

