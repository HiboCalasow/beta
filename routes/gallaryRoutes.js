const express =require('express');
const router=express.Router();
const gallaryModel=require('../models/gallaryModel')
const {getAllGallary,getgallaryById,CreateNewgallary,updateSinglegallary,deleteOnegallary}=require('../controller/gallaryController')


router.route('/').get(getAllGallary);
router.route('/:id').get(getgallaryById);
router.route('/').post(CreateNewgallary);
router.route('/:id').put(updateSinglegallary);
router.route('/:id').delete(deleteOnegallary);

module.exports= router