"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const deployment_1 = require("../../modals/deployment");
/**
 * @description fetch all deployments
 * @param req Express request
 * @param res Express Response
 */
exports.deployments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield deployment_1.Deployment.find();
        res.send({ data });
    }
    catch (error) {
        res.send(error);
    }
});
/**
 * @description Create particular deployment
 * @param req Express request
 * @param res Express Response
 */
exports.createDeployment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (data) {
            const deployment = new deployment_1.Deployment(data);
            const result = yield deployment.save();
            res.send({ result });
        }
        else
            throw "Body data required";
    }
    catch (error) {
        res.send(error);
    }
});
/**
 * @description Delete particular deployment
 * @param req Express request
 * @param res Express Response
 */
exports.deleteDeployment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        if (id) {
            const result = yield deployment_1.Deployment.deleteOne({ _id: id });
            res.send({ result });
        }
        else
            throw "id is required!";
    }
    catch (error) {
        res.send(error);
    }
});
//# sourceMappingURL=index.js.map