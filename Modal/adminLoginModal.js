const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true     
    }
},{timestamps:true});

const Admin = mongoose.model('adminSchema',adminSchema);

module.exports = Admin;