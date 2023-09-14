import express from "express"
import {signup} from "../controller//auth.controller.js"

export const userRouter = express.Router();

userRouter.post("/signup", signup);