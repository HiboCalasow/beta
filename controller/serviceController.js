const service=require('../models/serviceModel')
const mongoose =require("mongoose")


const getAllService= async (req,res) =>{
    const services= await  service.find()
    res.status(200).json(services)
}
const getServicesById= async (req,res) =>{

    const getService = await service.findById(req.params.id);
    if (!service) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getService)
    
}
const CreateServices= async (req,res) =>{
    const {title,description,icon}=req.body;
    if(!title || !description || !icon ){
       res.status(400)
       throw new error('all feilds are required')
    }
    const CreateService =await service.create({
       title,description,icon
    })
    res.status(200).json(CreateService)
}
const updateService= async (req,res) =>{
    const updateService= await service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateService)
    res.status(200).json('update this user')
}
const deleteService= async (req,res) =>{
    const deleteServices = await service.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteServices)
}
module.exports ={getAllService,getServicesById,CreateServices,updateService,deleteService}