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

