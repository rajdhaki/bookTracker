import { prisma } from "@/app"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userLogin = async (req:Request, res:Response) => {

    try {
        const { email, password } = req.body
        const loginUser = await prisma.user.findFirst({
            where: { email }
        })
        if (!bcrypt.compare(password,loginUser?.password!)) res.status(400).json({ "msg": "user not found" })
        const token = jwt.sign({userId:loginUser?.id}, process.env.JWT_SECRET!,{expiresIn:'1d'})
        res.cookie('token',token,{
            httpOnly:true
        }).json({"msg":"login sucessfully"})
        
    } catch (error) {
        res.status(400).json({ "msg": "please register first" })
    }

}