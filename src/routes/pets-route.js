'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pets-controller'); 

/**
 * @swagger
 * components:
 *   schemas:
 *     Pets:
 *       type: object
 *       required:
 *         - name
 *         - gender
 *         - species
 *         - breed
 *         - age
 *         - city
 *         - favorite
 *         - status
 *         - image
 *       properties:
 *         name:
 *              ype: string,
 *         gender:
 *              type: string,
 *         species:
 *              type: string,
 *         breed:
 *              type: string,
 *         age:
 *              type: number,
 *         city:
 *              type: string,
 *         favorite: 
 *              type: boolean,
 *         status:
 *              type: boolean,
 *         image:
 *              type: string,
 *       example:
 *         name: Name,
 *         gender: Gender,
 *         species: Species,
 *         breed: Breed,
 *         age: age,
 *         city: City,
 *         favorite:  Favorite,
 *         status: Status,
 *         image: Image,
 */

/**
 * @swagger
 * tags: 
 *  name: Pets
 *  description: 4Patas PETS API
 * 
 */

/**
 * @swagger
 * /pets:
 *      get:
 *          summary: All Pets of 4Patas
 *          responses:
 *              200:
 *                  description: The list of the pets
 *                  content:
 *                      swagger/json:
 *                          schemas:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Pets'
 */

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/species/:species', controller.getBySpecie);
router.get('/favorites/:favorite', controller.getByFav);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;

