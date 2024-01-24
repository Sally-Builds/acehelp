import {Request, Response} from "express";
import {CreateService, CreateSubService, GetServiceAgg, GetServices} from "./service.service";
import { CustomResponse } from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const _createService = async (req: Request, res: Response) => {
    const data = await CreateService(req.body, req.user.uid);
    return (res as CustomResponse<any>).success({
        msg: Reasons.DefaultReasons.CREATED,
        data: {service: data},
        statusCode: 201,
    });
}

export const _createSubService = async (req: Request, res: Response) => {
    const data = await CreateSubService(req.body, req.user.uid)
    return (res as CustomResponse<any>).success({
        msg: Reasons.DefaultReasons.CREATED,
        data: {subService: data},
        statusCode: 201,
    });
}

export const _getServiceAggreate = async (req: Request, res: Response) => {
    const data = await GetServiceAgg(req.params.id, req.user.uid)
    return (res as CustomResponse<any>).success({
        msg: Reasons.DefaultReasons.OK,
        data: {service: data},
        statusCode: 200,
    });
}
export const _getServices = async (req: Request, res: Response) => {
    const data = await GetServices(req.user.uid)
    return (res as CustomResponse<any>).success({
        msg: Reasons.DefaultReasons.OK,
        data: {services: data, length: data.length},
        statusCode: 200,
    });
}

