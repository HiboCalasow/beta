const express =require('express');
const router=express.Router();
const userModel=require('../models/userModel')
const {getUserAll,getUserById,CreateUser,updateUser,deleteUser}=require('../controller/userController')


router.route('/').get(getUserAll);
router.route('/:id').get(getUserById);
router.route('/').post(CreateUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports= router