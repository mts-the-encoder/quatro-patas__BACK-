'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

exports.get = async () => {
    const res = await Pet
        .find({
            active: true
        }, 'name gender species breed favorite status image');
    return res;
}

exports.getByName = async (name) => {
    const res = await Pet
        .findOne({
            name: name,
            active: true
        }, 'name gender species breed favorite status image');
    return res;
}

exports.getBySpecie = async (species) => {
    const res = await Pet
        .find({
            species: species,
            active: true
        }, 'name gender species breed favorite status image');
    return res;
}

exports.getByFav = async (favorite) => {
    const res = await Pet
        .find({
            favorite: favorite,
            active: true
        }, 'name gender species breed age city favorite status image');
    return res;
}

exports.create = async (data) => {
    let pet = new Pet(data);
    await pet.save();
}

exports.update = async (id, data) => {
    await Pet
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                age: data.age,
                city: data.city,
                favorite: data.favorite,
                status: data.status,
                image: data.image
            }
        });
}

exports.delete = async (id) => {
    await Pet
        .findOneAndRemove(id);
}