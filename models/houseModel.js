
const mongoose =require('mongoose');

const houseShema =mongoose.Schema({
    houseType:{
        type:String,
        required:[true,"please add Home type"]
    },
    area:{
        type:String,
        required:[true,"please add Home area"]
    },
    age:{
        type:Number,
        required:[true,"please add age home"]
    },
    rent:{
        type:Number,
        required:[true,"please add home rent "]
        
    },
    deposit:{
        type:Number,
        required:[true,"please add deposit  amount"]
    },
    parcking:{
        type:String,
        required:[true,"please add home parcking"]
    },
    image:{
        type:String,
        required:[true,"please add image"]
    },
    isAvailible:{
        type:String,
        required:[true,"please add deposit  amount"]
    },
    rooms:{
        type:Number,
        required:[true,"please add home rooms"]
    },
    tailot:{
        type:Number,
        required:[true,"please add deposit  amount"]
    },
    masterRoom:{
        type:String,
        required:[true,"please add  if there master room"]
    },
    details:{
        type:String,
        required:[true,"please add home  details"]
    },
    user:{
        type:String,
        required:[true,"please add user"]
    }

});


module.exports = mongoose.model('houses',houseShema)