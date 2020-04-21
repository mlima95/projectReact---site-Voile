var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the request'
    },
    description: {
        type: String,
        required: 'Kindly enter a description of the request'
    },
    equipment: {
        type: String,
        required: 'Kindly enter the equipment of the request'
    },
    nbPerson: {
        type: Number,
        required: 'Kindly enter number of persons of the request'
    },
    activityStart: {
        type: Date,
        required: 'Kindly enter the start date of the request'
    },
    activityEnd: {
        type: Date,
        required: 'Kindly enter the end date of the request'
    },
    status: {
        type: String
    },
    statusReply: {
        type: Number
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports = mongoose.model('Request', RequestSchema);