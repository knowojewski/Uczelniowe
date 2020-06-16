const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    game: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    rating: {
        type: Nymber,
        required: true
    },
    content: {
        type: Text,
        required: true
    }
});

module.exports = mongoose.model('review', reviewSchema, 'reviews');