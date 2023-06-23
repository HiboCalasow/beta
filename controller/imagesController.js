const image=require('../models/imagesModel')
const mongoose =require("mongoose")


const getAllImages= async (req,res) =>{
    const images= await  image.find()
    res.status(200).json(images)
    
}
const getimageById= async (req,res) =>{

    const getImage = await image.findById(req.params.id);
    if (!image) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getImage)
    
}
const CreateImages= async (req,res) =>{
    const {houseImages,houseId}=req.body;
    if(!houseImages || !houseId ){
       res.status(400)
       throw new error('all feilds are required')
    }
    const createimage =await image.create({
       houseImages,houseId
    })
    res.status(200).json(createimage)
}
const updateImages= async (req,res) =>{
    const updateImage= await image.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateImage)
   
}
const deleteImages= async (req,res) =>{
    const deleteImage = await image.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteImage)
}
module.exports ={getAllImages,CreateImages,updateImages,deleteImages,getimageById}