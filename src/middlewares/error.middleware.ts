import { NextFunction, Request, Response } from "express";
import {CustomError} from "../helpers/lib/App";
import {Reasons} from "../helpers/constants";
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        const {statusCode, message, logging, errors} = err
        if(logging) {
            console.error(JSON.stringify({
                code: statusCode,
                errors: errors,
                stack: err.stack,
            }))
        }
        return res.status(statusCode).send({errors})
    }


    return res.status(500).send({ errors: [{ message: Reasons.DefaultReasons.INTERNAL_SERVER_ERROR }] });
};