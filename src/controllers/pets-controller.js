'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

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