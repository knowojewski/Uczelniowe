const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unitSchema = new Schema({
    armyName: {
        type: String,
        required: true,
    },
    unitName: {
        type: String,
        required: true,
    },
    unitDesc: {
        type: String,
        required: true,
    },
    unitType: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;