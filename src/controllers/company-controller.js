'use strict';

const repository = require('../repositories/company-repository');

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


exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Company registered successfully!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request :/'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Company successfully updated!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request :/'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Company successfully removed!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process your request :/'
        });
    }
}