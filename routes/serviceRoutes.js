const express =require('express');
const router=express.Router();
const serviceModel=require('../models/serviceModel')
const {getAllService,getServicesById,CreateServices,updateService,deleteService}=require('../controller/serviceController')


router.route('/').get(getAllService);
router.route('/:id').get(getServicesById);
router.route('/').post(CreateServices);
router.route('/:id').put(updateService);
router.route('/:id').delete(deleteService);

module.exports= router