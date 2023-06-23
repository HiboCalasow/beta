const client=require('../models/ourClaintModel')
const mongoose =require("mongoose")


const getAllclients= async (req,res) =>{
    const clients= await  client.find()
    res.status(200).json(clients)
}
const getclientById= async (req,res) =>{

    const getclient = await client.findById(req.params.id);
    if (!client) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getclient)
    
}
const Createclients= async (req,res) =>{
    const {name,clientlogo}=req.body;
    if(!name || !clientlogo ){
       res.status(400)
       throw new error('all feilds are required')
    }
    const createclient =await client.create({
       name,clientlogo
    })
    res.status(200).json(createclient)
}
const updateclients= async (req,res) =>{
    const updateclient= await client.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateclient)
 
}
const deleteclients= async (req,res) =>{
    const deleteclient = await client.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteclient)
}

module.exports ={getAllclients,getclientById,Createclients,updateclients,deleteclients}