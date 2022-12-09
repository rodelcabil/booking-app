import express from "express";
import { deleteUser, getUser, updateUser, getAllUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("hello user you are logged in!")
// });
 
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user you are logged in and you can delete your account!")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello user you are logged in and you can delete all account!")
// });




// UPDATE
router.put("/update/:id", verifyUser, updateUser)

// DELETE
router.delete("/delete/:id", verifyUser, deleteUser)

// GET SPECIFIC ITEM/User
router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getAllUser)


export default router
