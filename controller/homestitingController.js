const homestiting =require('../models/homestitingModel')
const mongoose =require("mongoose");

const gethomestitingAll= async (req,res) =>{
    const users= await  homestiting.find()
    res.status(200).json(users)
}
const gethomestitingById= async (req,res) =>{

    const getUser = await homestiting.findById(req.params.id);
    if (!homestiting) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getUser)
    
}
const Createhomestiting= async (req,res) =>{
    const {Title,Logo,Name,Address, Email,Phone, Whatapp,Facebook, Instagram,Tiktok, Herotitle, HeroDiscritpion, HeroImage}=req.body;
    if(!Title || !Logo || !Name || !Address || !Email || !Phone || !Whatapp || !Facebook || !Instagram || !Tiktok || !Herotitle|| !HeroDiscritpion || !HeroImage){
       res.status(400)
       throw new error('all feilds are required')
    }
    const createhomestitings =await homestiting.create({
        Title,Logo,Name,Address, Email,Phone, Whatapp,Facebook, Instagram,Tiktok, Herotitle, HeroDiscritpion, HeroImage
    });
    res.status(200).json(createhomestitings)
}
const updatehomestiting= async (req,res) =>{
    const updatehomestitings= await homestiting.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatehomestitings)
    res.status(200).json('update this user')
}
const deletehomestiting= async (req,res) =>{
    const deleteUser = await homestiting.findByIdAndDelete(req.params.id)
    res.status(200).json(deletehomestiting)
}


module.exports ={gethomestitingAll,gethomestitingById,Createhomestiting,updatehomestiting,deletehomestiting}