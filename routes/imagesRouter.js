const express =require('express');
const router=express.Router();
const ImagesModel=require('../models/imagesModel')
const {getAllImages,CreateImages,updateImages,deleteImages,getimageById}=require('../controller/imagesController')


router.route('/').get(getAllImages);
router.route('/').post(CreateImages);
router.route('/:id').get(getimageById);
router.route('/:id').put(updateImages);
router.route('/:id').delete(deleteImages);

module.exports= router