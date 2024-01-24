import {Request, Response} from "express";
import { CreateUser, GetUser, GetUsers, LoginUser } from './auth.service';


export const _register = async (req: Request, res: Response) => {
  const data = await CreateUser(req.body)

  res.status(200).json({
    data
  })
}

export const _login = async (req: Request, res: Response) => {
  const data = await LoginUser(req.body)

  res.status(200).json({
    token: data
  })
}