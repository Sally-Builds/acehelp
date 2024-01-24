import {Request, Response} from "express";
import {CustomResponse} from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const _getMe = async (req: Request, res: Response) => {

  return (res as CustomResponse<any>).success({
    msg: Reasons.DefaultReasons.OK,
    data: {user: req.user},
    statusCode: 200,
  });
}