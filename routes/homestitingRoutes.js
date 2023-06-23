const express =require('express');
const router=express.Router();
const homestitingModel=require('../models/homestitingModel')
const {gethomestitingAll,gethomestitingById,Createhomestiting,updatehomestiting,deletehomestiting}=require('../controller/homestitingController')


router.route('/').get(gethomestitingAll);
router.route('/:id').get(gethomestitingById);
router.route('/').post(Createhomestiting);
router.route('/:id').put(updatehomestiting);
router.route('/:id').delete(deletehomestiting);

module.exports= router