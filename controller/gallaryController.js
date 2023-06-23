const gallary =require('../models/gallaryModel');



const getAllGallary = async (req,res) =>{
    const Gallary= await  gallary.find();
    res.status(200).json(Gallary)
}
const getgallaryById= async (req,res) =>{

    const getgallary= await gallary.findById(req.params.id);
    if (!gallary) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getgallary)
    
}
const CreateNewgallary = async (req,res) =>{
    const {img_title,image}=req.body;
    if(!img_title || !image ){
       res.status(400)
       throw new error('all feilds are required')
    }
    const creategallary=await gallary.create({
       img_title,image
    })
    res.status(200).json(creategallary)
}
const updateSinglegallary= async (req,res) =>{
    const updategallary= await gallary.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updategallary)
   
}
const deleteOnegallary= async (req,res) =>{
    const deletegallary= await gallary.findByIdAndDelete(req.params.id)
    res.status(200).json(deletegallary)
}

module.exports ={getAllGallary,getgallaryById,CreateNewgallary,updateSinglegallary,deleteOnegallary}