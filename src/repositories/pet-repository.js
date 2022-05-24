'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

exports.get = () => {
    return Pet
        .find({
            active: true
        }, 'name gender species breed favorite status image');
}

exports.getByName = (name) => {
    return Pet
        .findOne({
            name: name,
            active: true
        }, 'name gender species breed favorite status image');
}

exports.getBySpecie = (species) => {
    return Pet
        .find({
            species: species,
            active: true
        }, 'name gender species breed favorite status image');
}

exports.getByFav = (favorite) => {
    return Pet
        .find({
            favorite: favorite,
            active: true
        }, 'name gender species breed age city favorite status image');
}

exports.create = (data) => {
    let pet = new Pet(data);
    return pet.save();
}

exports.update = (id, data) => {
    return Pet
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

exports.delete = (id) => {
    return Pet
    .findOneAndRemove(id);
}