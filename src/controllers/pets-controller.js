'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
const repository = require('../repositories/pet-repository');

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getByName = (req, res, next) => {
    repository
        .getByName(req.params.name)
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getBySpecie = (req, res, next) => {
    repository
        .getBySpecie(req.params.species)
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getByFav = (req, res, next) => {
    repository
        .getByFav (req.params.favorite)
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({ message: 'PEt cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({ message: 'falha ao cadastrar!', data: e });
        });
}

exports.put = (req, res, next) => {
    repository
    .update(req.params.id, req.body)
    .then(x => {
            res.status(200).send({
                message: 'Pet atualizado!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar...',
                data: e
            });
        });
}

exports.delete = (req, res, next) => {
    repository
        .delete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Pet removido!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover Pet...',
                data: e
            });
        });
}