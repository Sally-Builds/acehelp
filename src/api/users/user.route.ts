import express from "express";
import { validationMiddleware } from '../../middlewares/validation.middleware';
import authenticate from "../../middlewares/authentication.middleware";
import { _getMe } from './user.controller';

const router = express.Router();



router.route("").get(authenticate, _getMe)
export default {
  router: router,
  path: "/users",
};
