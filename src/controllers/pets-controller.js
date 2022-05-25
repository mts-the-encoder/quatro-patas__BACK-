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
        let data = await repository.getByFav(req.params.favorite);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'PEt cadastrado com sucesso!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua informação'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Pet atualizado!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua informação'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
        res.status(200).send({
            message: 'Pet removido!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua informação'
        });
    }
}