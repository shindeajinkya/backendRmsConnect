const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'user', 'head']
    // },
    // group: {
    //     type: String,
    //     required: true,
    // },
    // DOB: {
    //     type: Date,
    //     required: true,
    //     default: new Date()
    // },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);