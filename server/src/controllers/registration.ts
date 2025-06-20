import { prisma } from "@/app"


export const registerUser = async (req, res) => {

    try {
        const userData = req.body
        await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password
            }
        })
        res.status(200).json(userData)
    } catch (error) {
        res.status(401).json({ "msg": "error accoure" })
    }

}