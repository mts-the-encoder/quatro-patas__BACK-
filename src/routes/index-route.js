'use strict';

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "QUATRO PATAS API",
        version: "0.0.2"
    });
});

module.exports = router;

//DB Structure
/*
-Empresa
    Nome
    Endereço
    Cidade
    Estado
    Telefone
-Pets
    Nome
    Especie
    Raça
    Idade
    Cidade
    Favorito
    Status
*/

//d13b382601cbba33674a5f41223869b7b2b70ef988d36d8db92f094762c61d5b

// id SERIAL PRIMARY KEY,
// name VARCHAR(100) NOT NULL,
// adress VARCHAR(75) NOT NULL,
// city VARCHAR(50) NOT NULL,
// state VARCHAR(35) NOT NULL,
// phone VARCHAR(20) NOT NULL);