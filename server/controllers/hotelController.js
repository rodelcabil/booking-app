import HotelModel from "../models/HotelModel.js";

//CREATE HOTEL
export const createHotel = async (req, res, next) =>{

    const newHotel = new HotelModel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
       next(err);
    }

}

//UPDATE HOTEL
export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await HotelModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // USED TO GET THE UPDATED VALUE
        );
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err);
    }
};

//DELETE HOTEL
export const deleteHotel = async (req, res, next) => {
    try {
        await HotelModel.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
};

//GET HOTEL

export const getHotel = async (req, res, next) => {
    try {
        const getHotel = await HotelModel.findById(
            req.params.id,
        );
        res.status(200).json(getHotel);
    } catch (err) {
        next(err);
    }
};

//GET ALL HOTEL

export const getAllHotel = async (req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "You are not authenticated!"))


    try {
        const getHotel = await HotelModel.find();
        res.status(200).json(getHotel);
    } catch (err) {
        next(err);
    }
};