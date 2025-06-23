import { prisma } from "@/app"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express"
export const userLogin = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body


        const loginUser = await prisma.user.findFirst({
            where: { email }
        })
        console.log(loginUser);

        if (!loginUser) {
            return res.status(400).json({ msg: "User not found, please register first" })
        }

        const isMatch = await bcrypt.compare(password, loginUser?.password!)
        console.log(isMatch);

        if (!isMatch) res.status(400).json({ "msg": "user not found" })
        const token = jwt.sign({ userId: loginUser?.id }, process.env.JWT_SECRET!, { expiresIn: '1d' })
        console.log(token);

        res.cookie('token', token, {
            httpOnly: true
        }).json({ "msg": "login sucessfully" })


    } catch (error) {
        res.status(400).json({ "msg": "please register first" })
    }

}