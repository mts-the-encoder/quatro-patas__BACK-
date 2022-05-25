'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
const repository = require('../repositories/pet-repository');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.getByName = async (req, res, next) => {
    try {
        let data = await repository.getByName(req.params.name);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }

}

exports.getBySpecie = async (req, res, next) => {
    try {
        let data = await repository.getBySpecie(req.params.species);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.getByFav = async (req, res, next) => {
    try {
        let data = await repository.getByFav(req.params.favorite)
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.post = (req, res, next) => {
    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({
                message: 'PEt cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha ao cadastrar!',
                data: e
            });
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