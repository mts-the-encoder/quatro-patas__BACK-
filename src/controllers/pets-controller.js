'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

exports.get = (req, res, next) => {
    Pet
        .find({
            active: true
        }, 'name gender species breed favorite status image')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getByName = (req, res, next) => {
    Pet
        .findOne({
            name: req.params.name,
            active: true
        }, 'name gender species breed favorite status image')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getBySpecie = (req, res, next) => {
    Pet
        .find({
            species: req.params.species,
            active: true
        }, 'name gender species breed favorite status image')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getByFav = (req, res, next) => {
    Pet
        .find({
            favorite: req.params.favorite,
            active: true
        }, 'name gender species breed age city favorite status image')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    let pet = new Pet(req.body);
    pet
        .save()
        .then(x => {
            res.status(201).send({ message: 'PEt cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({ message: 'falha ao cadastrar!', data: e });
        });
}

exports.put = (req, res, next) => {
    const id = req.body.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}