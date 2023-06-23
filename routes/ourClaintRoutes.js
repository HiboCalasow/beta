const express =require('express');
const router=express.Router();
const clientModel=require('../models/ourClaintModel')
const {getAllclients,getclientById,Createclients,updateclients,deleteclients}=require('../controller/ourClaintController')


router.route('/').get(getAllclients);
router.route('/:id').get(getclientById);
router.route('/').post(Createclients);
router.route('/:id').put(updateclients);
router.route('/:id').delete(deleteclients);

module.exports= router