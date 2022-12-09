import { createError } from "../utils/error.js";
import RoomModel from "../models/RoomModel.js";
import HotelModel from "../models/HotelModel.js";


// CREATE ROOM
export const createRoom = async (req, res, next) => {
    
    const hotelID = req.params.hotelid;
    const newRoom = new RoomModel(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await HotelModel.findByIdAndUpdate(hotelID, {$push: {
                rooms: savedRoom._id
            }});
        }catch(err) {
            next(err);
        }
        res.status(200).json(savedRoom)
    }catch(err) {
        next(err);
    }

}


//UPDATE ROOM
export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await RoomModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // USED TO GET THE UPDATED VALUE
        );
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err);
    }
};

//DELETE ROOM
export const deleteRoom = async (req, res, next) => {

    const hotelID = req.params.hotelid;
    try {
        await RoomModel.findByIdAndDelete( req.params.id);
        try {
            await HotelModel.findByIdAndUpdate(hotelID, {
                $pull: {
                    rooms: req.params.id
                }
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};

//GET ROOM

export const getRoom = async (req, res, next) => {
    try {
        const getRoom = await RoomModel.findById(
            req.params.id,
        );
        res.status(200).json(getRoom);
    } catch (err) {
        next(err);
    }
};

//GET ALL ROOM

export const getAllRoom = async (req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "You are not authenticated!"))


    try {
        const getAllRoom = await RoomModel.find();
        res.status(200).json(getAllRoom);
    } catch (err) {
        next(err);
    }
};