import express, { Router } from "express";

import { authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
    deleteUser  } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(protect,getUser).put(protect,updateUserProfile);
router.route("/:id").get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deleteUser);

export default router;

// User Routes  