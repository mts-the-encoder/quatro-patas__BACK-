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
 * 
 *       properties:
 *         name:
 *              type: string
 *         gender:
 *              type: string
 *         species:
 *              type: string
 *         breed:
 *              type: string
 *         age:
 *              type: number
 *         city:
 *              type: string
 *         favorite: 
 *              type: boolean
 *         status:
 *              type: boolean
 *         image:
 *              type: string
 * 
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
 *                  description: PETS-
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
 *     summary: GET the pet by name
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: GET The pet by name
 *     responses:
 *       200:
 *         description: PET-
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: This pet was not found
 */

router.get('/:name', controller.getByName);

/**
 * @swagger
 * /pets/species/{species}:
 *   get:
 *     summary: GET the pet by specie
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: species
 *         schema:
 *           type: string
 *         required: true
 *         description: GET The pet Species
 *     responses:
 *       200:
 *         description: PETS-
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: The pets(pets) was not found
 */

router.get('/species/:species', controller.getBySpecie);

/**
 * @swagger
 * /pets/favorites/{favorite}:
 *   get:
 *     summary: GET the pet if is Fav
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: favorite
 *         schema:
 *           type: string
 *         required: true
 *         description: GET The favorites pets
 *     responses:
 *       200:
 *         description: PETS-
 *         contens:
 *           swagger/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       404:
 *         description: The pet(pets) was not found
 */

router.get('/favorites/:favorite', controller.getByFav);

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Register a new pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pets'
 *     responses:
 *       200:
 *         description: The pet was successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pets'
 *       500:
 *         description: Some server error :/
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
 *        description: PUT The pet by id
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
 *        description: The pet was not found :/
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
 *         description: DELETE The pet by id
 * 
 *     responses:
 *       200:
 *         description: The pet was deleted
 *       404:
 *         description: The pet was not found :/
 */

router.delete('/:id', controller.delete);

module.exports = router;

