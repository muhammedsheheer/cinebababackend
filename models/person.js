const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name: String,
    occupation:String,
    birthplace:String,
    photo:String,
    about:String
  });
  
  const Person = mongoose.model('Person', personSchema);

  module.exports= Person
