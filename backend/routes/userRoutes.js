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

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(getUser).put(updateUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;

// User Routes  