const mongoose = require('mongoose');
const uuid = require('uuid');

const testSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required: true
    },
    category:{
        type:String,
        unique: true,
        required:true
    },
    question:{
        type: Array,
        required: true
    }
   
},{timestamps:true});

const TestSchema = mongoose.model('TestSchema',testSchema);

// Drop the entire collection
// TestSchema.collection.drop((err) => {
//   if (err) {
//     console.error('Error dropping collection:', err.message);
//   } else {
//     console.log('Collection dropped successfully.');
//   }

//   // Now, you can start fresh by saving documents with the new schema.
// });
module.exports = TestSchema;