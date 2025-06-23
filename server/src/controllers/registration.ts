import { prisma } from "@/app"
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {

    try {
        const userData = req.body
        const hashPass = await bcrypt.hash(userData.password, 10)
        console.log(hashPass)
        await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashPass
            }
        })
        res.status(200).json(userData)
    } catch (error) {
        res.status(401).json({ "msg": "error accoure" })
    }

}