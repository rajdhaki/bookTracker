import express from  'express'
import { registerUser } from '../controllers/registration'
import { userLogin } from '@/controllers/login'

const userRouter = express.Router()

userRouter.route("/registration").post(registerUser)
userRouter.route("/login").post(userLogin)


export  {userRouter}