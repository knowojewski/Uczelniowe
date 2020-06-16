const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rating_gamesSchema = new Schema({
    id_user: {
        type: Number,
        required: true
    },
    id_game: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: Text,
        required: true
    }
});

module.exports = mongoose.model('ratings_game', rating_gamesSchema, 'ratings_games');