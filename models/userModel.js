const mongoose =require('mongoose');

const userShema =mongoose.Schema({
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
    },
    status:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    
});

module.exports=mongoose.model('users',userShema);