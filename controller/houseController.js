const house = require('../models/houseModel');

//get all houses
//route GET /api/houses
const getHouses = async (req, res) => {
    try {
        const houses = await house.find()
        res.status(200).json(houses)
    } catch (error) {
        res.send(error.message)
    }


};
//create new house
//route POST /api/houses
const createHouse = async (req, res) => {
    // const result =await houseValidation.validateAsync(req.body);
    //res.status(404).json(result)
    //console.log('the requist is:', req.body)
    const { houseType, area, age, rent, deposit, parcking, image, isAvailible, rooms, tailot, masterRoom, details, user } = req.body;
    if (!houseType || !area || !age || !rent || !deposit || !parcking || !image || !isAvailible || !rooms || !tailot || !masterRoom || !details || !user) {
        res.status(400)
        throw new Error("all fields reqyired");
    }
    const houseCreate = await house.create({
        houseType, area, age, rent, deposit, parcking, image, isAvailible, rooms, tailot, masterRoom, details, user
    })
    res.status(201).json(houseCreate, 'created new house')
}
//get a by id houses
//route GET  /api/houses/:id
const getHouse = async (req, res) => {
    const gethouse = await house.findById(req.params.id);
    if (!house) {

        res.status(404);
        console.log(" not found this id ");
    }
    res.status(200).json(gethouse)
};
//get update houses
//route UPFATE /api/houses/:id
const updateHouse = async (req, res) => {
    const updatehouse = await house.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatehouse)
}
//get delete houses
//route DELETE /api/houses/:id
const deleteHouse = async (req, res) => {
    const deletehouse = await house.findByIdAndDelete(req.params.id)
    res.status(200).json(deletehouse)
}

module.exports = { getHouses, getHouse, createHouse, deleteHouse, updateHouse };