import { NextFunction } from "express";
import { CustomResponse, responseData } from "../helpers/lib/App";
import { StatusCodes } from "http-status-codes";

export const responseMiddleware = <T>(
  req: Request,
  res: CustomResponse<T>,
  next: NextFunction
) => {

  res.success = (response: responseData<T>) => {
    const { msg, data, statusCode } = response;
    res.status(statusCode || StatusCodes.OK).json({
      msg: msg,
      data: data || {},
      // auth: auth || false,
      // flag: flag || false,
    });
  };
  next();
};
