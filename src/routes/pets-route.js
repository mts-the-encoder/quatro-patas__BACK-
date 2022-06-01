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
 *         age: 0,
 *         city: City,
 *         favorite:  false,
 *         status: true,
 *         image: Image,
 */

/**
 * @swagger
 * tags: 
 *  name: Pets
 *  description: 4Patas PETS API
 */

/**
 * @swagger
 * /pets:
 *      get:
 *          summary: All Pets of 4Patas
 *          tags: [Pets]
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

/**
 * @swagger
 * /pets/{name}:
 *   get:
 *     summary: Get the pet by name
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet name
 *     responses:
 *       200:
 *         description: The pet by name
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: The pet was not found
 */

router.get('/:name', controller.getByName);

/**
 * @swagger
 * /pets/species/{species}:
 *   get:
 *     summary: Get the pet by name
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: species
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet Species
 *     responses:
 *       200:
 *         description: The pet by Specie
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: The pet was not found
 */

router.get('/species/:species', controller.getBySpecie);

/**
 * @swagger
 * /pets/favorites/{favorite}:
 *   get:
 *     summary: Get the pet by name
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: favorite
 *         schema:
 *           type: string
 *         required: true
 *         description: The favorites pets
 *     responses:
 *       200:
 *         description: The pet by Favs
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: The pet was not found
 */

router.get('/favorites/:favorite', controller.getByFav);

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Create a new pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pets'
 *     responses:
 *       200:
 *         description: The pet was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       500:
 *         description: Some server error
 */

router.post('/', controller.post);

/**
 * @swagger
 * /pets/{id}:
 *  put:
 *    summary: Update the pet by the id
 *    tags: [Pets]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The pet id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Pets'
 *    responses:
 *      200:
 *        description: The pet was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pets'
 *      404:
 *        description: The pet was not found
 *      500:
 *        description: Some error happened
 */

router.put('/:id', controller.put);

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Remove the pet by id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 * 
 *     responses:
 *       200:
 *         description: The pet was deleted
 *       404:
 *         description: The pet was not found
 */

router.delete('/:id', controller.delete);

module.exports = router;

