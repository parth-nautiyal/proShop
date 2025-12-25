import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import AppError from "../middleware/errorHandler.js";
import jwt from "jsonwebtoken";

//@desc    Authenticate user & get token
//@route   POST /api/users/login
//@access  Public
const authUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const token = jwt.sign({ user_id : user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    // Set JWT token as HTTP-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'Strict', // Adjust based on your requirements
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })

    if(user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else{
        res.status(401);
        throw new AppError("Invalid email or password", 401);
    }
});

//@desc    Register a new user
//@route   POST /api/users/register
//@access  Public
const registerUser = asyncHandler(async (req,res) => {
    res.send("register User");
});

//@desc    logout user / clear cookie
//@route   POST /api/users/logout
//@access  Private
const logoutUser = asyncHandler(async (req,res) => {
    res.send("logout User");
});

//@desc    get user profile
//@route   GET /api/users/profile
//@access  Private
const getUser = asyncHandler(async (req,res) => {
    res.send("get User profile");
});

//@desc    update user profile
//@route   PUT /api/users/profile
//@access  Private
const updateUserProfile = asyncHandler(async (req,res) => {
    res.send("update User Profile");
});

//@desc    Get all users
//@route   GET /api/users
//@access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("get all Users");
});

//@desc    Get user by id
//@route   GET /api/users/:id
//@access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("get User by ID");
});

//@desc    Update user
//@route   PUT /api/users/:id
//@access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("update User");
});

//@desc    Delete user
//@route   DELETE /api/users/:id
//@access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("delete User");
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
