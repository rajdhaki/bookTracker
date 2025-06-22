import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token
    if (!token) res.status(401).json({ "error": "no auth" })


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) 
        console.log(decoded);
        req.user = { id: decoded.userId }
        next()

    } catch  {
        res.status(400).json({ "error": "user not found" })
    }
}