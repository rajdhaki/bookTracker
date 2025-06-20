import { prisma } from "@/app"

export const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        const loginUser = await prisma.user.findFirst({
            where: { email }
        })
        if (loginUser?.password !== password) res.status(400).json({ "msg": "user not found" })
        res.status(200).json({ loginUser })
    } catch (error) {
        res.status(400).json({ "msg": "please register first" })
    }

}