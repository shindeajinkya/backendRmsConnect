const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedschema = new Schema({
    subject:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true 
    },
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Feedback',feedschema);
