import express from "express";
import { createHotel, deleteHotel, getHotel, updateHotel, getAllHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel)

// UPDATE
router.put("/update/:id", verifyAdmin, updateHotel)

// DELETE
router.delete("/delete/:id", verifyAdmin, deleteHotel)


// GET SPECIFIC ITEM/HOTEL
router.get("/:id", getHotel);

// GET ALL

router.get("/", getAllHotel)


export default router
