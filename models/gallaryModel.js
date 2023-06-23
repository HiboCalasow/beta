const mongoose =require('mongoose');

const gallarySchema =mongoose.Schema({
    img_title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
});

module.exports=mongoose.model('gallary ',gallarySchema);