const mongoose = require('mongoose');

const candidateInterviewerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true     
    },
    userType:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    shortList:{
        type:Number,
        required:false
    }
},{timestamps:true});

const CandidateInterviewer = mongoose.model('CandidateInterviewer',candidateInterviewerSchema);

module.exports = CandidateInterviewer;