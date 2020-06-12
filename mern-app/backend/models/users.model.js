const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    userDesc: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;