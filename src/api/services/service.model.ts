import {Schema, model, Document} from "mongoose"

export interface IService extends Document{
    service_name: string;
    service_description: string;
    service_logo: string;
    service_color: string;
    user: string;
    uid: string;
}

const serviceSchema = new Schema<IService>({
    service_name: {
        type: String,
        required: [true, "Service required"],
    },
    service_description: {
        type: String,
        required: [true, "Service description required"],
    },
    service_logo: {
        type: String,
        required: [true, "Service logo required"],
    },
    service_color: {
        type: String,
        default: "red"
    },
    user: {
        type: String,
        ref: "User",
        refPath: 'uid'
    },
    uid: {
        type: String,
        required: [true, "uid is required"],
        unique: true
    }
})

serviceSchema.index({uid: 1})
export default model("Service", serviceSchema)