const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 6,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    token: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('User',userSchema);

module.exports = User;