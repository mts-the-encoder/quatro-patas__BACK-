'use strict';

const mongoose = require('mongoose');
const Company = mongoose.model('Company');

exports.get = async () => {
    const res = await Company
        .findOne({
            active: true
        }, 'name adress number district zipCode city state phoneOne phoneTwo');
    return res;
}

exports.create = async(data) => {
    let company = new Company(data);
    await company.save();
}

exports.update = async (id, data) => {
    await Company
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                adress: data.adress,
                number: data.number,
                district: data.district,
                city: data.city,
                state: data.state,
                phoneOne: data.phoneOne,
                phoneTwo: data.phoneTwo
            }
        });
}

exports.delete = async (id) => {
    await Company
        .findOneAndRemove(id);
}