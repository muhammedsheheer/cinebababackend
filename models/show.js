const mongoose = require('mongoose');

const showScheema = new mongoose.Schema({
    showTime: Date,
    screen:{
        type: mongoose.ObjectId,
        ref:"Screen"
    },
    movie:{
        type:mongoose.ObjectId,
        ref:"movie"
    }
})

const Show = mongoose.model('Show',showScheema);

module.exports = Show