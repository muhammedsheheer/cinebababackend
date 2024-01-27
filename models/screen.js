const mongoose = require('mongoose');

const screenScheema = new mongoose.Schema({
    screenNumber: Number,
    theatre:{
        type : mongoose.ObjectId,
        ref: 'Theatre'
    },
    seating:{
        tiers:[
            {
                tierName:String,
                price:Number,
                rows:[
                    {
                        rowName:String,
                        numberOfSeats:Number
                    }
                ]
            }
        ]
    }

});

const Screen = mongoose.model('Screen',screenScheema);

module.exports = Screen