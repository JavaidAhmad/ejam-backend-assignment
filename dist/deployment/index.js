"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deployment_controller_1 = require("./controller/deployment-controller");
const template_controller_1 = require("./controller/template-controller");
const api = express_1.default();
// You may add api specific middlewares here
api.get('/templates', template_controller_1.templates);
api.get('/deployments', deployment_controller_1.deployments);
api.post('/deployments/create', deployment_controller_1.createDeployment);
api.delete('/deployments', deployment_controller_1.deleteDeployment);
exports.default = api;
//# sourceMappingURL=index.js.map