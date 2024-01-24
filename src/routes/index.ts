import IRoute from "./route.interface";
import authRoute from "../api/auth/auth.route";
import userRoute from "../api/users/user.route";


const auth: IRoute = authRoute;
const user: IRoute = userRoute;
export default [auth, user];
