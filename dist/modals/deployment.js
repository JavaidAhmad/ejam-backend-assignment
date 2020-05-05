"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deployment = mongoose_1.default.Schema({
    url: String,
    templateName: String,
    version: String,
    deployedAt: Date
});
exports.Deployment = mongoose_1.default.model('deployment', deployment);
//# sourceMappingURL=deployment.js.map