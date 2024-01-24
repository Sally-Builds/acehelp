import {Request, Response} from "express";
import { CreateUser, GetUser, GetUsers, LoginUser } from './auth.service';
import {CustomResponse} from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const _register = async (req: Request, res: Response) => {
  const data = await CreateUser(req.body)

  return (res as CustomResponse<any>).success({
    msg: Reasons.DefaultReasons.OK,
    data: {message: data},
    statusCode: 201,
  });
}

export const _login = async (req: Request, res: Response) => {
  const token = await LoginUser(req.body)

  return (res as CustomResponse<any>).success({
    msg: Reasons.DefaultReasons.OK,
    data: {token},
    statusCode: 200,
  });
}