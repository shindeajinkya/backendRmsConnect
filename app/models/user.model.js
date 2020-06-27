const mongoose = require('mongoose');
const {UserLocationSchema} = require('../models/location.model')

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
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    phonenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: Object,
    },
    feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }],
    referrals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recruitmentdata'
    }]
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'user', 'head']
    // },
    // group: {
    //     type: String,
    //     required: true,
    // },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);