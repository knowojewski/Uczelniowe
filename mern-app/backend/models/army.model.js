const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const armySchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    armyName: {
        type: String,
        required: true,
    },
    armyDesc: {
        type: String,
        required: true,
    },
    armyAllign: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Army = mongoose.model('Army', armySchema);

module.exports = Army;