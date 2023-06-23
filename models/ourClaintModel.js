const mongoose =require('mongoose');

const ourClaintSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    clientlogo:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
});

module.exports=mongoose.model('Claint',ourClaintSchema);