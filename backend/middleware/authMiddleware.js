import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

//Protect routes
const protect = asyncHandler(async (req, res, next)=>{
    let token;

    token= req.cookies.jwt;
    if(token){
        try {
            console.log(token)
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.user_id).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not Authorised, token failed');
        }
    }else{
        res.status(401);
        throw new Error('Not Authorised, no token');
    }
});

//Admin Middleware
const admin = (req,res, next)=>{
    console.log(req.user)
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error('Not authorised as Admin');
    }
}

export {protect, admin};