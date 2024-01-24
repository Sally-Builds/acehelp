import {getServiceAggregate, serviceRepo, subServiceRepo} from "./service.repository";
import {ServiceCreateValidator, SubServiceCreteValidator} from "./service.interface";
import {CustomError} from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const CreateService = async (payload: ServiceCreateValidator, user_uid: string) => {
    return await serviceRepo.create('-_id, -__v', {...payload, user: user_uid});
}

export const CreateSubService = async (payload: SubServiceCreteValidator, user_uid: string) => {
    const isService = await serviceRepo.findOne({uid: payload.sub_service_parent})

    if(!isService) throw new CustomError({message: Reasons.DefaultReasons.BAD_REQUEST})
    return await subServiceRepo.create({id: 0}, {...payload, user: user_uid})
}
export const GetServices = async (user_uid: string) => {
    return await serviceRepo.findMany({user: user_uid}, {_id: 0, __v: 0})
}


export const GetServiceAgg = async (service_uid: string, user_uid: string) => {
    return await getServiceAggregate(service_uid, user_uid)
}