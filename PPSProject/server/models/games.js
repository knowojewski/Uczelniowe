const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    game_name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 10
    },
    publisher: {
        type: String,
        required: true,
        trim: true,
        minlenght: 10
    },
    producer: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    release_date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

});

module.exports = mongoose.model('game', gamesSchema, 'games');