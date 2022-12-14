import UserModel from "../models/UserModel.js";


//UPDATE User
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // USED TO GET THE UPDATED VALUE
        );
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
};

//DELETE User
export const deleteUser = async (req, res, next) => {
    try {
        await UserModel.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
};

//GET User

export const getUser = async (req, res, next) => {
    try {
        const getUser = await UserModel.findById(
            req.params.id,
        );
        res.status(200).json(getUser);
    } catch (err) {
        next(err);
    }
};

//GET ALL User

export const getAllUser = async (req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "You are not authenticated!"))


    try {
        const getUser = await UserModel.find();
        res.status(200).json(getUser);
    } catch (err) {
        next(err);
    }
};