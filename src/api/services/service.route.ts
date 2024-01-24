import express from "express";
import {_createService, _createSubService, _getServiceAggreate, _getServices} from "./service.controller";
import authenticate from "../../middlewares/authentication.middleware";
import {validationMiddleware} from "../../middlewares/validation.middleware";
import {ServiceCreateValidator, SubServiceCreteValidator} from "./service.interface";

const router = express.Router();



router.post("", authenticate, validationMiddleware(ServiceCreateValidator), _createService)
    .get("", authenticate, _getServices)
    .post('/subservices/',authenticate, validationMiddleware(SubServiceCreteValidator), _createSubService)
    .get("/:id", authenticate, _getServiceAggreate);
export default {
    router: router,
    path: "/services",
};
