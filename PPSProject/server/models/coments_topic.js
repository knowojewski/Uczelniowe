const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coments_topicSchema = new Schema({
    id_topic: {
        type: Number,
        required: true
    },
    contenet: {
        type: Text,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('coments_topic', coments_topicSchema, 'coments_topics');