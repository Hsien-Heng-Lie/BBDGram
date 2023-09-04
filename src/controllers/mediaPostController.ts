import { NextFunction, Request, Response } from "express";
import MediaPost from "../models/MediaPost";
import { ErrorHandler } from "../utils/ErrorHandler";

export const getMediaPost = async (req: Request, res: Response, next: NextFunction) => {
    const mediaPosts = await MediaPost.find();

    res.status(200).json({
        success: true,
        mediaPosts
    })
};

export const getUserProfileAndMediaPosts = async (req: Request, res: Response, next: NextFunction) => {
    const user = await MediaPost.findById(req.body.userId);

    if(!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    const mediaPosts = await MediaPost.find({ userId: req.body.userId });

    res.status(200).json({
        success: true,
        user: user,
        userPosts: mediaPosts
    })
};