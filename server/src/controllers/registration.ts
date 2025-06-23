import { prisma } from "@/app"
import bcrypt from 'bcrypt'

export const registerUser = async (req:Request, res:Response) => {

    try {
        const userData = req.body
        const hashPassword:string = await bcrypt.hash(userData.password,10)
        await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashPassword
            }
        })
        res.status(200).json(userData)
    } catch (error) {
        res.status(401).json({ "msg": "error accoure" })
    }

}