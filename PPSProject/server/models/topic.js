const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topic: {
        type: String,
        trim: true,
        required: true,
        minlength: 10
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: Text,
        required: true
    }
});

module.exports = mongoose.model('topic', topicSchema, 'topics');