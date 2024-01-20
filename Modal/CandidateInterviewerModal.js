const mongoose = require('mongoose');

const candidateInterviewerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true     
    },
    userType:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    }
},{timestamps:true});

const CandidateInterviewer = mongoose.model('CandidateInterviewer',candidateInterviewerSchema);

module.exports = CandidateInterviewer;