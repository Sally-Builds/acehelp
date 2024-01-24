import {Schema, model, Document} from "mongoose";


export interface ISubService extends Document{
    sub_service_name: string;
    sub_service_parent: string;
    sub_service_description: string;
    user: string;
    uid: string;
}

const subServiceSchema = new Schema<ISubService>({
    sub_service_name: {
        type: String,
        required: [true, "name of sub service"],
    },
    sub_service_parent: {
        type: String,
        ref: "Service",
        refPath: 'uid'
    },
    user: {
        type: String,
        ref: "User",
        refPath: 'uid'
    },
    sub_service_description: {
        type: String,
        required: [true, "description to sub service"]
    },
    uid: {
        type: String,
        required: [true, "uid is required"],
        unique: true
    }
})

subServiceSchema.index({uid: 1})

export default model("SubService", subServiceSchema)