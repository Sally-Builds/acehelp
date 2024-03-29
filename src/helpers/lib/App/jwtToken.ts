import jwt from "jsonwebtoken";
import {IUser} from "../../../api/users/user.interface";
import { ObjectId } from "mongoose"

export interface Token {
    id: ObjectId,
    expiresIn: number
}
export const createToken = (user: IUser):string  => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: '30d'
    })
}

export const verifyToken = async (token:string): Promise<jwt.VerifyErrors | Token> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err, payload) => {
            if(err) return reject(err)

            resolve(payload as Token)
        })
    })
}

export default { createToken, verifyToken}