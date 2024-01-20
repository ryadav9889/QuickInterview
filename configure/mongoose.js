const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ryadavkl:Rahul%409889@cluster0.xwnmkwf.mongodb.net/");

const db = mongoose.connection
db.on('error',console.error.bind(console, "Error connecting to DB"));
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
  });