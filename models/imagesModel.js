const mongoose =require('mongoose');

const imagesShema =mongoose.Schema({
    houseImages:{
        type:String,
        required:true
    },
    houseId:{
        type:String,
        required:true
    }
    
    
});

module.exports=mongoose.model('images',imagesShema);