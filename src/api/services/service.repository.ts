import {DbRepository} from "../../helpers/lib/DB/db_base.repository";
import serviceModel, {IService} from "./service.model";
import subServiceModel, {ISubService} from "./subService.model";

export const serviceRepo = new DbRepository<IService>(serviceModel)
export const subServiceRepo = new DbRepository<ISubService>(subServiceModel)
export const getServiceAggregate = async (uid: string, user: string) => {
    try {
        const res = await serviceModel.aggregate([
            {
                $match: {
                    uid: uid,
                    user: user,
                }
            },
            {
                $lookup: {
                    from: 'subservices',
                    localField: 'uid',
                    foreignField: 'sub_service_parent',
                    as: 'sub_services'
                }
            },
            {$project: {_id: 0, __v: 0, 'sub_services._id': 0, 'sub_services.__v': 0, 'sub_services.user': 0}}
        ])

        return res.length > 0 ? res[0] : {}

    }catch (e: any) {
        console.log(e)
        throw new Error(e)
    }
}