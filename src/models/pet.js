'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    species: {
        type: String,
        required: true,
        trim: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    favorite: {
        type: Boolean,
        required: true,
        default: false
    },
    status: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Pet', schema);