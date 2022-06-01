'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/company-controller'); 

/**
 * @swagger
 * components:
 *   schemas:
 *     Companies:
 *       type: object
 *       required:
 *         - name
 *         - adress
 *         - number
 *         - district
 *         - zipCode
 *         - city
 *         - state
 *         - phoneOne
 *         - phoneTwo
 *       properties:
 *         name:
 *              ype: string,
 *         adress:
 *              type: string,
 *         number:
 *              type: string,
 *         district:
 *              type: string,
 *         zipCode:
 *              type: string,
 *         city:
 *              type: string,
 *         state: 
 *              type: string,
 *         phoneOne:
 *              type: string,
 *         phoneTwo:
 *              type: string,
 *       example:
 *         name: Name,
 *         adress: Adress,
 *         number: Number,
 *         district: District,
 *         zipCode: ZipCode,
 *         city: City,
 *         state:  State,
 *         phoneOne: PhoneOne,
 *         phoneTwo: PhoneOne,
 */

/**
 * @swagger
 * tags: 
 *  name: Companies
 *  description: 4Patas COMPANIES API
 */

/**
 * @swagger
 * /company:
 *      get:
 *          summary: All Companies of 4Patas
 *          tags: [Companies]
 *          responses:
 *              200:
 *                  description: The list of the companies
 *                  content:
 *                      swagger/json:
 *                          schemas:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Companies'
 */

router.get('/', controller.get);

/**
 * @swagger
 * /company:
 *   post:
 *     summary: Create a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Companies'
 *     responses:
 *       200:
 *         description: The company was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Companies'
 *       500:
 *         description: Some server error
 */

router.post('/', controller.post);

/**
 * @swagger
 * /company/{id}:
 *  put:
 *    summary: Update the company by the id
 *    tags: [Companies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The company id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Companies'
 *    responses:
 *      200:
 *        description: The company was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Companies'
 *      404:
 *        description: The company was not found
 *      500:
 *        description: Some error happened
 */

router.put('/:id', controller.put);

/**
 * @swagger
 * /company/{id}:
 *   delete:
 *     summary: Remove the company by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company id
 * 
 *     responses:
 *       200:
 *         description: The company was deleted
 *       404:
 *         description: The company was not found
 */


router.delete('/:id', controller.delete);

module.exports = router;