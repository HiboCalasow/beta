const express =require('express');
const router=express.Router();
const houseModel =require ('../models/houseModel')
const { getHouses, getHouse, createHouse, deleteHouse, updateHouse} =require('../controller/houseController');

router.route('/').get(getHouses);
router.route('/:id').get(getHouse);
router.route('/').post(createHouse);
router.route('/:id').put(updateHouse);
router.route('/:id').delete(deleteHouse);

module.exports= router