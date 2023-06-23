const mongoose =require('mongoose');

const homestitingSchema =mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Logo:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Whatapp:{
        type:String,
        required:true
    },
    Facebook :{
        type:String,
        required:true
    },
    Instagram:{
        type:String,
        required:true
    },
    Tiktok:{
        type:String,
        required:true
    },
    Herotitle:{
        type:String,
        required:true
    },
    HeroDiscritpion:{
        type:String,
        required:true
    },
    HeroImage:{
        type:String,
        required:true
    },
    
},
{
timestamps:true
});

module.exports=mongoose.model('homestiting',homestitingSchema);