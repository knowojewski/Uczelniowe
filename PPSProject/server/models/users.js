const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3
    },
    login: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlenght: 8
    },
    e_mail: {
        type: String,
        required: true,
        trim: true,

    }
});

module.exports = mongoose.model('user', usersSchema, 'users');