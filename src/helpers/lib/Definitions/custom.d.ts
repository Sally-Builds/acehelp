import {IUser} from "../../../api/users/user.interface";

import User from '@/resources/user/user.interface';
declare global {
    namespace Express {
        export interface Request {
            user: IUser
        }
    }
}