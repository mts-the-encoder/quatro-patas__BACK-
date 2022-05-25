'use strict';

const repository = require('../repositories/company-repository');

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


exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Empresa cadastrada com sucesso!'
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
            message: 'Empresa atualizada!'
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
            message: 'Empresa removida!'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua informação'
        });
    }
}