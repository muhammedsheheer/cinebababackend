const mongoose = require('mongoose');

const theatreScheema = new mongoose.Schema({
    name:String,
    adress:String

});

const Theatre = mongoose.model('Theatre',theatreScheema);

module.exports = Theatre