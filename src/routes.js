const { Router } = require('express');

const UserControlller = require('./app/Controller/UserController'); 
const CompanyController = require('./app/Controller/CompanyController');

const routes = new Router();

routes.post("/user", UserControlller.index);
routes.get("/user", UserControlller.show);
routes.post("/company", CompanyController.index);

module.exports = routes;

/*
Estrutura do banco
Empresa
Nome
Endereço
Cidade
Estado
Telefone
---
Pet
Nome
Especie
Raça
Idade
Cidade
Favorito
Status
*/