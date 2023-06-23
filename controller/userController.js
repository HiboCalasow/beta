const user=require('../models/userModel')
const mongoose =require("mongoose")


const getUserAll= async (req,res) =>{
    const users= await  user.find()
    res.status(200).json(users)
}
const getUserById= async (req,res) =>{

    const getUser = await user.findById(req.params.id);
    if (!user) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(getUser)
    
}
const CreateUser= async (req,res) =>{
    const {name,email,password,status,role}=req.body;
    if(!name || !email || !password || !status || !role){
       res.status(400)
       throw new error('all feilds are required')
    }
    const createUser =await user.create({
       name,email,password,status,role
    })
    res.status(200).json(createUser)
}
const updateUser= async (req,res) =>{
    const updateUser= await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateUser)
    res.status(200).json('update this user')
}
const deleteUser= async (req,res) =>{
    const deleteUser = await user.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteUser)
}
module.exports ={getUserAll,getUserById,CreateUser,updateUser,deleteUser}