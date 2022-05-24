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
    Pet
        .findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                age: req.body.age,
                city: req.body.city,
                favorite: req.body.favorite,
                status: req.body.status,
                image: req.body.image
            }
        }).then(x => {
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
    Pet
        .findOneAndRemove(req.body.id)
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