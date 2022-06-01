'use strict';

const repository = require('../repositories/pet-repository');
const azure = require('azure-storage');
const guid = require('guid');
const config = require('../config');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }
}

exports.getByName = async (req, res, next) => {
    try {
        let data = await repository.getByName(req.params.name);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }

}

exports.getBySpecie = async (req, res, next) => {
    try {
        let data = await repository.getBySpecie(req.params.species);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'FFailed to process your request!'
        });
    }
}

exports.getByFav = async (req, res, next) => {
    try {
        let data = await repository.getByFav(req.params.favorite);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }
}

exports.post = async(req, res, next) => {
    try {

        const blobSvc = azure.createBlobService(config.containerConnectionString);


        let filename = guid.raw().toString() + '.jpg';
        let rawdata = req.body.image;
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = matches[1];
        let buffer = new Buffer(matches[2], 'base64');

        // Salva a imagem
        await blobSvc.createBlockBlobFromText('quatro-patas', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default-product.png'
            }
        });

        await repository.create({
            name: req.body.name,
            gender: req.body.gender,
            species: req.body.species,
            breed: req.body.breed,
            age: req.body.age,
            city: req.body.city,
            favorite: req.body.favorite,
            status: req.body.status,
            image: 'https://mts4.blob.core.windows.net/quatro-patas/' + filename
        });
        res.status(201).send({
            message: 'PEt successfully registered!'
    });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Pet successfully updated!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Pet successfully removed!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request!'
        });
    }
}