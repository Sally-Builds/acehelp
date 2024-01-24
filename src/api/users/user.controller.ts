import {Request, Response} from "express";


export const _getMe = async (req: Request, res: Response) => {

  res.status(200).json({
    data: {
      user: req.user
    }
  })
}