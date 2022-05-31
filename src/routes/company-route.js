'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/company-controller'); 

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;



// basePath": "/",

//     "paths": {
//         "/pets": {
//             "get": {
//                 "parametes": {
//                     "in": "query"
//                 },
//                 "responses": {

//                 }
//             }
//         },

//         "/pets": {
//             "post": {
//                 "requestBody": {
//                     "content": {
//                         "application/json": {
//                             "schema": {
//                                 "type": "object",
//                                 "properties": {
//                                     "name": {
//                                         "type": "string"
//                                     },
//                                     "gender": {
//                                         "type": "string"
//                                     },
//                                     "species": {
//                                         "type": "string"
//                                     },
//                                     "breed": {
//                                         "type": "string"
//                                     },
//                                     "age": {
//                                         "type": "number"
//                                     },
//                                     "city": {
//                                         "type": "string"
//                                     },
//                                     "favorite": {
//                                         "type": "boolean"
//                                     },
//                                     "status": {
//                                         "type": "boolean"
//                                     },
//                                     "image": {
//                                         "type": "string"
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }