const mongoose = require('mongoose')

const CordsSchema = mongoose.Schema({
    accuracy: {
        type: Number,
        required: true,
    },
    altitude: {
        type: Number,
        required: true,
    },
    heading: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    }
})

const UserLocationSchema = mongoose.Schema({
    coords: {
        type: CordsSchema,
        required: true,
    },
    mocked: {
        type: Boolean,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
});

module.exports = {
    UserLocation: mongoose.model('UserLocation', UserLocationSchema),
    UserLocationSchema,
}


// location ={
//     "coords": Object {
//         "accuracy": 16,
//         "altitude": 0,
//         "heading": 0,
//         "latitude": 19.1184205,
//         "longitude": 72.9994584,
//         "speed": 0,
//       },
//       "mocked": false,
//       "timestamp": 1584856560658,
//     }