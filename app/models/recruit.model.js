const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedschema = new Schema({
    fullname:{
        type: mongoose.Schema.Types.String,
        require: true
    },
    secondname:{
        type: mongoose.Schema.Types.String,
        require: true 
    },lastname:{
        type: mongoose.Schema.Types.String,
        require: true 
    },laneone:{
        type: mongoose.Schema.Types.String,
        require: true   
    },lanetwo:{
        type: mongoose.Schema.Types.String,
        require: true 
    },city:{
        type: mongoose.Schema.Types.String,
        require: true 
    },state:{
        type: mongoose.Schema.Types.String,
        require: true 
    },pincode:{
        type: mongoose.Schema.Types.Number,
        require: true 
    },country:{
        type: mongoose.Schema.Types.String,
        require: true 
    },phoneNumber:{
        type: mongoose.Schema.Types.Number,
        require: true 
    },email:{
        type: mongoose.Schema.Types.Mixed,
        require: true 
    },birthdate:{
        type: mongoose.Schema.Types.Date,
        require: true 
    },education:{
        type: mongoose.Schema.Types.String,
        require: true 
    },skills:{
        type: mongoose.Schema.Types.String,
        require: true 
    },qualification:{
        type: mongoose.Schema.Types.String,
        require: true 
    },
    referral: {
        type: mongoose.Schema.Types.ObjectId,
        refer: 'User'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('recruitmentdata ',feedschema);