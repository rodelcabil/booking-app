import express from "express";
import { createRoom, deleteRoom, updateRoom, getRoom, getAllRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom)

// UPDATE
router.put("/update/:id", verifyAdmin, updateRoom)

// DELETE
router.delete("/delete/:hotelid/:id", verifyAdmin, deleteRoom)


// GET SPECIFIC ITEM/ROOM
router.get("/:id", getRoom);

// GET ALL

router.get("/", getAllRoom)


export default router
