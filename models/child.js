let mongoose = require('mongoose');

let childSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    achievments: [],
    prizes: [],
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let Child = module.exports = mongoose.model('Child', childSchema);